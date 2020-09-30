<template>
  <div id="tm-container-for-my-tasks-list">
    <div class="title-for-colon">
      <div style="margin-left: 15px">Cтатус</div>
      <div style="margin-left: 15px">Название задачи</div>
      <div style="margin: auto">Исполнитель</div>
      <div style="margin: auto">Срок</div>
      <div style="margin: auto" class="mobile">Сложность</div>
      <div style="margin: auto" class="mobile">Время</div>
      <div style="margin: auto" class="mobile">Автор</div>
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
          <div v-if="task.status===1" class="status-none" style="width: 13px;height: 13px"></div>
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
          <div class="executer-round">
            <div style="margin: auto">{{task.executer[0]}}</div>
          </div>
        </div>
        <div class="tasks-status">
          <div style="margin: auto">{{task.deadline}}</div>
        </div>
        <div class="executer mobile">
          <div class="executer-oval" :style="{background: task.difficulty===3 ? '#F3B6B8': task.difficulty===2 ? '#F1EAA5': '#B9ECB5'}">
            <div style="margin: auto">{{task.difficulty===3 ? 'Сложная': task.difficulty===2 ? 'Средняя': 'Легкая'}}</div>
          </div>
        </div>
        <div class="tasks-status mobile">
          <div style="margin: auto">{{task.time}}</div>
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