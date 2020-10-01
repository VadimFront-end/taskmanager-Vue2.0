<template>
  <div id="tm-container-for-my-tasks-list">
    <div class="title-for-colon">
      <div style="margin-left: 15px">Cтатус</div>
      <div style="margin-left: 15px">Название задачи</div>
      <div style="margin: auto">Тип</div>
      <div style="margin: auto">Срок</div>
      <div style="margin: auto" class="mobile">Сложность</div>
      <div style="margin: auto" class="mobile">Время</div>
      <div style="margin: auto" class="mobile">Создатель</div>
      <div style="margin-left: 15px" class="mobile">Описание</div>
    </div>
    <div
        v-for="(task,index) in TASKS"
        :key="index"
        class="last-tasks"
        v-show="(!DIFFICULTY_FILTER.easy&&!DIFFICULTY_FILTER.normal&&!DIFFICULTY_FILTER.hard)||task.difficulty===1&&DIFFICULTY_FILTER.easy||task.difficulty===2&&DIFFICULTY_FILTER.normal||task.difficulty===3&&DIFFICULTY_FILTER.hard"
        :style="{borderRadius: index===TASKS.length-1 ? '0 0 14px 14px' : index===0 ? '14px 14px 0 0' : ''}">
<!--      v-show="task.status===3&&STATUSFILTER.statusToDo||task.status===2&&STATUSFILTER.statusWork||task.status===1&&STATUSFILTER.statusDane"-->
        <div
            class="tasks-status"
            @mouseout="indexForShowStatus=NaN"
            @mousemove="indexForShowStatus=index"
            @click="indexForOpenStatus===index ? indexForOpenStatus=NaN: indexForOpenStatus=index">
          <svg v-if="task.status===2" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5.3444H9.50538L6.05604 1.87436L6.97752 0.947357L12 5.99999L6.97752 11.0526L6.05604 10.1256L9.50538 6.65558H0V5.3444Z" fill="#4F8AFD"/>
          </svg>
          <svg v-if="task.status===3" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0C2.6916 0 0 2.6916 0 6C0 9.3084 2.6916 12 6 12C9.3084 12 12 9.3084 12 6C12 2.6916 9.3084 0 6 0ZM6 10.8C3.3534 10.8 1.2 8.6466 1.2 6C1.2 3.3534 3.3534 1.2 6 1.2C8.6466 1.2 10.8 3.3534 10.8 6C10.8 8.6466 8.6466 10.8 6 10.8Z" fill="#2CCF11"/>
            <path d="M4.79941 6.95213L3.42001 5.57513L2.57281 6.42473L4.80062 8.64773L8.82421 4.62413L7.97581 3.77573L4.79941 6.95213Z" fill="#2CCF11"/>
          </svg>
          <svg v-if="task.status===1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C3.5888 0 0 3.5888 0 8C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8C16 3.5888 12.4112 0 8 0ZM8 14.4C4.4712 14.4 1.6 11.5288 1.6 8C1.6 4.4712 4.4712 1.6 8 1.6C11.5288 1.6 14.4 4.4712 14.4 8C14.4 11.5288 11.5288 14.4 8 14.4Z" fill="#889ABD"/>
          </svg>
          <svg :style="{transform: indexForOpenStatus===index ? 'rotate(180deg)': ''}" style="margin-left: 4px" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.70345 5.30376C5.31378 5.68944 4.68622 5.68944 4.29655 5.30376L0.666294 1.71074C0.031322 1.08228 0.476353 5.37548e-08 1.36975 -2.4348e-08L8.63026 -6.59082e-07C9.52365 -7.37185e-07 9.96868 1.08228 9.33371 1.71074L5.70345 5.30376Z" fill="#B0BCD3"/>
          </svg>
          <div class="description-for-status" v-show="indexForShowStatus===index">
            <div
                v-show="task.status===3"
                style="color: #27B310"
            >Готово
            </div>
            <div
                v-show="task.status===2"
                style="color: #0356F6"
            >В работе
            </div>
            <div
                v-show="task.status===1"
                style="color: #576F9D"
            >Нужно сделать
            </div>
          </div>
          <div class="select-status-for-task" v-if="indexForOpenStatus===index">
            <div
                style="color: #576F9D"
                :style="{background: task.status===1 ? '#E5EBF3': ''}"
                class="container-for-statuses"
                @click="selectThisStatus(1,index)"
            >Нужно сделать
              <svg v-show="task.status===1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.43434 1.11228C8.60579 0.934339 8.83724 0.834197 9.07865 0.8335C9.32006 0.832802 9.55204 0.931606 9.72442 1.10855C9.89681 1.28549 9.99575 1.52636 9.99987 1.77908C10.004 2.03179 9.91293 2.27605 9.74641 2.45904L4.85587 8.85938C4.77182 8.95416 4.67038 9.03023 4.55761 9.08302C4.44483 9.13582 4.32305 9.16427 4.19954 9.16667C4.07602 9.16906 3.95332 9.14535 3.83876 9.09696C3.72419 9.04857 3.62013 8.97649 3.53278 8.88503L0.292438 5.49118C0.202165 5.40312 0.12976 5.29691 0.0795416 5.17891C0.029323 5.06091 0.0023197 4.93353 0.000142992 4.80436C-0.00203372 4.6752 0.0206608 4.5469 0.0668722 4.42712C0.113084 4.30733 0.181865 4.19852 0.269114 4.10717C0.356363 4.01583 0.460292 3.94381 0.5747 3.89543C0.689108 3.84705 0.811652 3.82329 0.935022 3.82557C1.05839 3.82785 1.18006 3.85612 1.29277 3.9087C1.40547 3.96127 1.50691 4.03708 1.59103 4.13159L4.15635 6.81614L8.41107 1.1405C8.41866 1.13056 8.42684 1.12113 8.43557 1.11228H8.43434Z" fill="#576F9D"/>
              </svg>
            </div>
            <div
                style="color: #0356F6"
                :style="{background: task.status===2 ? '#EDF3FF': ''}"
                @click="selectThisStatus(2,index)"
                class="container-for-statuses"
            >В работе
              <svg v-show="task.status===2" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.43434 1.11228C8.60579 0.934339 8.83724 0.834197 9.07865 0.8335C9.32006 0.832802 9.55204 0.931606 9.72442 1.10855C9.89681 1.28549 9.99575 1.52636 9.99987 1.77908C10.004 2.03179 9.91293 2.27605 9.74641 2.45904L4.85587 8.85938C4.77182 8.95416 4.67038 9.03023 4.55761 9.08302C4.44483 9.13582 4.32305 9.16427 4.19954 9.16667C4.07602 9.16906 3.95332 9.14535 3.83876 9.09696C3.72419 9.04857 3.62013 8.97649 3.53278 8.88503L0.292438 5.49118C0.202165 5.40312 0.12976 5.29691 0.0795416 5.17891C0.029323 5.06091 0.0023197 4.93353 0.000142992 4.80436C-0.00203372 4.6752 0.0206608 4.5469 0.0668722 4.42712C0.113084 4.30733 0.181865 4.19852 0.269114 4.10717C0.356363 4.01583 0.460292 3.94381 0.5747 3.89543C0.689108 3.84705 0.811652 3.82329 0.935022 3.82557C1.05839 3.82785 1.18006 3.85612 1.29277 3.9087C1.40547 3.96127 1.50691 4.03708 1.59103 4.13159L4.15635 6.81614L8.41107 1.1405C8.41866 1.13056 8.42684 1.12113 8.43557 1.11228H8.43434Z" fill="#0356F6"/>
              </svg>
            </div>
            <div
                style="color: #27B310;border-radius: 0 0 5px 5px"
                :style="{background: task.status===3 ? '#DFFCDB': ''}"
                @click="selectThisStatus(3,index)"
                class="container-for-statuses"
            >Готово
              <svg v-show="task.status===3" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.43434 1.11228C8.60579 0.934339 8.83724 0.834197 9.07865 0.8335C9.32006 0.832802 9.55204 0.931606 9.72442 1.10855C9.89681 1.28549 9.99575 1.52636 9.99987 1.77908C10.004 2.03179 9.91293 2.27605 9.74641 2.45904L4.85587 8.85938C4.77182 8.95416 4.67038 9.03023 4.55761 9.08302C4.44483 9.13582 4.32305 9.16427 4.19954 9.16667C4.07602 9.16906 3.95332 9.14535 3.83876 9.09696C3.72419 9.04857 3.62013 8.97649 3.53278 8.88503L0.292438 5.49118C0.202165 5.40312 0.12976 5.29691 0.0795416 5.17891C0.029323 5.06091 0.0023197 4.93353 0.000142992 4.80436C-0.00203372 4.6752 0.0206608 4.5469 0.0668722 4.42712C0.113084 4.30733 0.181865 4.19852 0.269114 4.10717C0.356363 4.01583 0.460292 3.94381 0.5747 3.89543C0.689108 3.84705 0.811652 3.82329 0.935022 3.82557C1.05839 3.82785 1.18006 3.85612 1.29277 3.9087C1.40547 3.96127 1.50691 4.03708 1.59103 4.13159L4.15635 6.81614L8.41107 1.1405C8.41866 1.13056 8.42684 1.12113 8.43557 1.11228H8.43434Z" fill="#27B210"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="tasks-title">
          <div style="margin: auto 15px">{{task.title}}</div>
        </div>
        <div class="executer">
          <svg v-if="task.type===1" style="margin: auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4 3.2H11.2V1.6C11.2 0.712 10.488 0 9.6 0H6.4C5.512 0 4.8 0.712 4.8 1.6V3.2H1.6C0.712 3.2 0.00799999 3.912 0.00799999 4.8L0 13.6C0 14.488 0.712 15.2 1.6 15.2H14.4C15.288 15.2 16 14.488 16 13.6V4.8C16 3.912 15.288 3.2 14.4 3.2ZM9.6 3.2H6.4V1.6H9.6V3.2Z" fill="#889ABD"/>
          </svg>
          <svg v-else style="margin: auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M7.88596 7.70724C8.94479 7.70724 9.86166 7.32749 10.6108 6.57822C11.3599 5.82908 11.7397 4.91246 11.7397 3.8535C11.7397 2.79491 11.3599 1.87817 10.6107 1.12878C9.86141 0.379759 8.94467 0 7.88596 0C6.827 0 5.91038 0.379759 5.16124 1.1289C4.41209 1.87804 4.03221 2.79479 4.03221 3.8535C4.03221 4.91246 4.41209 5.8292 5.16136 6.57834C5.91062 7.32736 6.82737 7.70724 7.88596 7.70724Z" fill="#889ABD"/>
              <path d="M14.629 12.3031C14.6074 11.9913 14.5637 11.6512 14.4993 11.2921C14.4344 10.9303 14.3508 10.5882 14.2507 10.2756C14.1473 9.95251 14.0067 9.63341 13.8328 9.32763C13.6524 9.01025 13.4405 8.73388 13.2027 8.50647C12.9541 8.26855 12.6496 8.07727 12.2976 7.93774C11.9467 7.79895 11.5579 7.72864 11.1421 7.72864C10.9787 7.72864 10.8208 7.79565 10.5157 7.99426C10.328 8.1167 10.1084 8.2583 9.86325 8.41491C9.65365 8.54846 9.36972 8.67358 9.01901 8.78686C8.67685 8.89758 8.32944 8.95373 7.98655 8.95373C7.64365 8.95373 7.29636 8.89758 6.95384 8.78686C6.60349 8.6737 6.31956 8.54858 6.11021 8.41504C5.86741 8.25989 5.64769 8.11828 5.45714 7.99414C5.15245 7.79553 4.99437 7.72852 4.83104 7.72852C4.41503 7.72852 4.02636 7.79895 3.67565 7.93787C3.32384 8.07715 3.01928 8.26843 2.77038 8.50659C2.53271 8.73413 2.32067 9.01037 2.1405 9.32763C1.96679 9.63341 1.82617 9.95238 1.72265 10.2757C1.62268 10.5884 1.53906 10.9303 1.47412 11.2921C1.40979 11.6507 1.36609 11.9909 1.34448 12.3034C1.32324 12.6096 1.3125 12.9273 1.3125 13.2483C1.3125 14.0835 1.578 14.7596 2.10156 15.2583C2.61865 15.7503 3.30285 16 4.13488 16H11.8389C12.671 16 13.3549 15.7505 13.8721 15.2583C14.3958 14.76 14.6613 14.0837 14.6613 13.2481C14.6612 12.9258 14.6503 12.6078 14.629 12.3031Z" fill="#889ABD"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="15.9999" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="tasks-status">
          <div style="margin: auto">{{task.deadline}}</div>
        </div>
        <div class="executer mobile">
          <div class="executer-oval" :style="{background: task.difficulty===3 ? '#F3B6B8': task.difficulty===2 ? '#F1EAA5': '#B9ECB5'}">
            <div style="margin: auto">{{task.difficulty===3 ? 'Сложная': task.difficulty===2 ? 'Средняя': 'Легкая'}}</div>
          </div>
        </div>
      <div class="tasks-time mobile">
        <div style="color: #576F9D">Оценочное</div>
        <div style="margin-top: 2px;font-size: 0.85rem">{{task.time}}</div>
        <div style="color: #576F9D;margin-top: 6px">Фактическое</div>
        <div style="margin-top: 2px;font-size: 0.85rem">{{task.time}}</div>
      </div>
        <div class="executer mobile">
          <div class="executer-round">
            <div style="margin: auto">{{task.author[0]}}</div>
          </div>
        </div>
        <div class="tasks-title mobile">
          <div class="for-description">{{task.description}}</div>
        </div>
      <div
          class="container-for-arrow mobile"
          @mousemove="arrowColor=index"
          @mouseout="arrowColor=-1"
          :style="{borderTopRightRadius: index===0 ? '14px': '',
                   borderBottomRightRadius: index===TASKS.length-1 ? '14px': ''}"

          @click.prevent="showSubtasks(index)"
          :index="indexForShow">
        <div
            class="arrow-for-small-task"
            :style="{transform: index===indexForShow ? 'rotate(-45deg)' : 'rotate(45deg)',
                    background: arrowColor===index ? '#FFFFFF': '#4F8AFD'}"
            style="margin-right: -2px"></div>
        <div
            class="arrow-for-small-task"
            :style="{transform: index===indexForShow ? 'rotate(45deg)' : 'rotate(-45deg)',
                    background: arrowColor===index ? '#FFFFFF': '#4F8AFD'}"
            style="margin-left: -2px"></div>
      </div>
      <tmSubTasks
          :subtasks="task.subtasks"
          :indexTask="index"
          class="mobile"
          v-if="indexForShow===index"
          :whereSubTasksShow="true"/>
    </div>
    <div style="display: none">
      <tmContainerForDragAndDrop id="bord-1">
        <tmCardForDragAndDrop id="card-1">
          drag me
        </tmCardForDragAndDrop>
        <tmCardForDragAndDrop id="card-2">
          drag me
        </tmCardForDragAndDrop >
      </tmContainerForDragAndDrop>
      <tmContainerForDragAndDrop id="bord-2">
      </tmContainerForDragAndDrop>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import tmContainerForDragAndDrop from '../components/tm-container-for-drag-and-drop'
import tmCardForDragAndDrop from  '../components/tm-card-for-drag-and-drop'
import tmSubTasks from '../components/tm-subtasks'

export default {
name: "tm-container-for-my-tasks",
  components: {
    tmContainerForDragAndDrop,
    tmCardForDragAndDrop,
    tmSubTasks
  },
  data() {
    return {
      indexForShow: NaN,
      arrowColor: -1,
      indexForOpenStatus: NaN,
      indexForShowStatus: NaN
    }
  },
  computed: {
    ...mapGetters([
      'TASKS',
      'STATUSFILTER',
      'DIFFICULTY_FILTER'
    ])
  },
  methods: {
    showSubtasks(index) {
      if(index===this.indexForShow)this.indexForShow=NaN;
      else this.indexForShow=index;
    },
    selectThisStatus(status,indexTask) {
      const newStatus = {
        status,
        indexTask
      }
      this.$store.dispatch('editStatusTask', newStatus);
    }
  }
}
</script>

<style>
.for-description {
  margin: auto 15px;
  font-size: 0.85rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>