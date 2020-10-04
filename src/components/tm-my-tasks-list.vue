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
        v-for="(task,index) in FILTERED"
        :key="index"
        class="last-tasks"
        :style="{borderRadius: (index===FILTERED.length-1)&&(index===0) ? '14px': index===FILTERED.length-1 ? '0 0 14px 14px': index===0 ? '14px 14px 0 0' : ''}">
        <tmStatusTask
          :status="task.status"
          :taskId="task.id"
          :openThisTableStatuses="openThisTableStatuses"
          @click.native="openThisTableStatuses===task.id ? openThisTableStatuses=NaN: openThisTableStatuses=task.id"/>
        <div class="tasks-title">
          <div style="margin: auto 15px">{{task.title}}</div>
        </div>
        <div class="executer" @mousemove="indexForShowTaskType=index" @mouseout="indexForShowTaskType=NaN">
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
          <div
              class="description-for-status"
              v-if="indexForShowTaskType===index">
            <div
                style="color: #485C83"
                v-show="task.type===1"
            >Рабочая
            </div>
            <div
                v-show="task.type===2"
                style="color: #485C83"
            >Личная
            </div>
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
      <div class="tasks-time mobile">
        <div style="color: #576F9D">Оценочное</div>
        <div style="margin-top: 2px;font-size: 0.85rem">{{task.time}}</div>
        <div style="color: #576F9D;margin-top: 6px">Фактическое</div>
        <div style="margin-top: 2px;font-size: 0.85rem">{{task.timeF}}</div>
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
                   borderBottomRightRadius: index===FILTERED.length-1 ? '14px': ''}"

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
          :indexTask="task.id"
          class="mobile"
          v-if="indexForShow===index"/>
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
import tmStatusTask from '../components/tm-status-task'

export default {
name: "tm-container-for-my-tasks",
  components: {
    tmContainerForDragAndDrop,
    tmCardForDragAndDrop,
    tmSubTasks,
    tmStatusTask
  },
  data() {
    return {
      indexForShow: NaN,
      arrowColor: -1,
      openThisTableStatuses: NaN,
      indexForShowTaskType: NaN,
      forKostilishe: NaN
    }
  },
  computed: {
    ...mapGetters([
      'FILTERED'
    ])
  },
  methods: {
    showSubtasks(index) {
      if(index===this.indexForShow)this.indexForShow=NaN;
      else this.indexForShow=index;
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