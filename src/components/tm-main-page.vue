<template>
 <div class="tm-container-for-content-page">
   <div class="title-main-page">Последние задачи</div>
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
       v-for="(task,index) in LASTTASKS"
       :key="index"
       class="last-tasks"
       :style="{borderRadius: index===LASTTASKS.length-1 ? '0 0 14px 14px' : index===0 ? '14px 14px 0 0' : ''}">
     <tmStatusTask
         :status="task.status"
         :indexTask="index"
         :openThisTableStatuses="openThisTableStatuses"
         @click.native="openThisTableStatuses===index ? openThisTableStatuses=NaN: openThisTableStatuses=index"/>
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
     <div class="tasks-status">{{task.deadline}}</div>
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
       <div style="margin: auto 15px;font-size: 0.85rem">{{task.description}}</div>
     </div>
     <div
         class="container-for-arrow mobile"
         @mousemove="arrowColor=index"
         @mouseout="arrowColor=-1"
         :style="{borderTopRightRadius: index===0 ? '14px': '',
                  borderBottomRightRadius: index===LASTTASKS.length-1 ? '14px 14px': ''}"

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
         :whereSubTasksShow="false"
         v-if="indexForShow===index"/>
   </div>
   <div class="title-main-page">Текущие проекты</div>
   <div class="project-now">
     <div class="project-now-item">
       <div class="project-now-item-title">Цифровая платформа “Название название”</div>
       <div class="project-now-status">
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M8.0625 0C7.403 0 6.84837 0.456437 6.69719 1.06991C5.17119 1.36944 3.77909 2.17022 2.74581 3.351C1.62 4.6375 1 6.28856 1 8C1 8.25887 1.20987 8.46875 1.46875 8.46875C1.72763 8.46875 1.9375 8.25887 1.9375 8C1.9375 6.51572 2.47513 5.08394 3.45134 3.96837C4.32819 2.96634 5.50234 2.27956 6.79138 2.00706C7.01713 2.48272 7.50194 2.8125 8.0625 2.8125C8.83791 2.8125 9.46875 2.18166 9.46875 1.40625C9.46875 0.630844 8.83791 0 8.0625 0Z" fill="#2CCF11"/>
           <path d="M12.0177 7.14897C11.9043 7.07012 11.6887 6.94547 11.5349 6.87906L11.2922 6.29313C11.3521 6.14213 11.4176 5.90053 11.4427 5.76094C11.4698 5.60988 11.4213 5.45509 11.3128 5.34656L10.6535 4.68725C10.5449 4.57869 10.3901 4.53016 10.2391 4.55734C10.1016 4.58206 9.86159 4.64647 9.70691 4.70784L9.12097 4.46513C9.05672 4.31631 8.93219 4.09897 8.85106 3.98237C8.76344 3.85637 8.61969 3.78125 8.46622 3.78125H7.53381C7.38034 3.78125 7.23659 3.85637 7.14897 3.98237C7.07012 4.09572 6.94547 4.31138 6.87906 4.46513L6.29313 4.70784C6.14213 4.64794 5.90053 4.58244 5.76094 4.55734C5.60997 4.53025 5.45509 4.57875 5.34656 4.68725L4.68725 5.34656C4.57872 5.45509 4.53019 5.60988 4.55734 5.76094C4.58206 5.89841 4.64647 6.13844 4.70784 6.29313L4.46513 6.87906C4.31631 6.94331 4.09897 7.06784 3.98237 7.14897C3.85637 7.23659 3.78125 7.38034 3.78125 7.53381V8.46622C3.78125 8.61969 3.85637 8.76344 3.98237 8.85106C4.09572 8.92991 4.31138 9.05456 4.46513 9.12097L4.70784 9.70691C4.64794 9.85791 4.58244 10.0995 4.55734 10.2391C4.53019 10.3902 4.57872 10.5449 4.68725 10.6535L5.34656 11.3128C5.45506 11.4213 5.60978 11.4698 5.76094 11.4427C5.89841 11.418 6.13844 11.3536 6.29313 11.2922L6.87906 11.5349C6.94331 11.6837 7.06784 11.9011 7.14897 12.0177C7.23659 12.1437 7.38034 12.2188 7.53381 12.2188H8.46622C8.61969 12.2188 8.76344 12.1437 8.85106 12.0177C8.92991 11.9043 9.05456 11.6887 9.12097 11.5349L9.70691 11.2922C9.85791 11.3521 10.0995 11.4176 10.2391 11.4427C10.3902 11.4698 10.5449 11.4213 10.6535 11.3128L11.3128 10.6535C11.4213 10.5449 11.4698 10.3902 11.4427 10.2391C11.418 10.1016 11.3536 9.86159 11.2922 9.70691L11.5349 9.12097C11.6837 9.05672 11.9011 8.93219 12.0177 8.85106C12.1437 8.76344 12.2188 8.61969 12.2188 8.46622V7.53381C12.2188 7.38034 12.1437 7.23659 12.0177 7.14897ZM8 9.87506C6.96613 9.87506 6.125 9.03394 6.125 8.00006C6.125 6.96619 6.96613 6.12506 8 6.12506C9.03387 6.12506 9.875 6.96619 9.875 8.00006C9.875 9.03394 9.03387 9.87506 8 9.87506Z" fill="#2CCF11"/>
           <path d="M14.53 7.53125C14.2711 7.53125 14.0612 7.74112 14.0612 8C14.0612 9.48428 13.5236 10.9161 12.5474 12.0316C11.6705 13.0337 10.4964 13.7204 9.20734 13.9929C8.98159 13.5173 8.49678 13.1875 7.93622 13.1875C7.16081 13.1875 6.52997 13.8183 6.52997 14.5938C6.52997 15.3692 7.16081 16 7.93622 16C8.59572 16 9.15034 15.5436 9.30153 14.9301C10.8275 14.6306 12.2196 13.8298 13.2529 12.649C14.3787 11.3625 14.9987 9.71144 14.9987 8C14.9987 7.74112 14.7888 7.53125 14.53 7.53125Z" fill="#2CCF11"/>
         </svg>
         <span style="color: #2CCF11;font-size: 0.85rem;align-self: center">Активный</span>
       </div>
       <div class="executers">
         <div class="executers-item" style="background: black;z-index: 5;"></div>
         <div class="executers-item" style="background: blue;transform: translate(-15px);z-index: 4;border: 3px solid #FFFFFF;"></div>
         <div class="executers-item" style="background: red;transform: translate(-30px);z-index: 3;border: 3px solid #FFFFFF;"></div>
         <div class="executers-item" style="background: orange;transform: translate(-45px);z-index: 2;border: 3px solid #FFFFFF;"></div>
       </div>
     </div>
     <div class="project-now-item"></div>
     <div class="project-now-item"></div>
     <div class="project-now-item"></div>
   </div>
 </div>
</template>

<script>
import tmStatusTask from '../components/tm-status-task'
import {mapGetters} from 'vuex'
import tmSubTasks from '../components/tm-subtasks'

export default {
  name: "tm-main-page",
  components: {
    tmSubTasks,
    tmStatusTask
  },
  data() {
    return {
      indexForShow: NaN,
      arrowColor: -1,
      indexForShowTaskType: NaN,
      openThisTableStatuses: NaN
    }
  },
  computed: {
    ...mapGetters([
        'LASTTASKS',
        'TASKS'
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
        indexTask: this.TASKS.length - 5 + indexTask
      }
      this.$store.dispatch('editStatusTask', newStatus);
    }
  }
}
</script>

<style>
.tm-container-for-content-page {
  padding-left: 70px;
  padding-bottom: 40px;
  width: 100%;
  margin: 56px auto 0;
  max-width: 1170px;
}
.title-main-page {
  font-size: 1.4rem;
  line-height: 23px;
  color: #10141D;
  margin: 24px 0;
}
.title-for-colon {
  line-height: 16px;
  color: #485C83;
  display: grid;
  grid-template-columns: 82px 340px 100px 82px 100px 82px 100px 285px;
  margin-bottom: 8px;
}
.last-tasks {
  display: grid;
  grid-template-columns: 82px 340px 100px 82px 100px 82px 100px 203px 82px;
  grid-auto-rows: minmax(72px,auto);
  box-shadow: 0 0 15px rgba(2, 57, 164, 0.05);
  margin-bottom: 2px;
  background: #FFFFFF;
}
.last-tasks:hover {
  box-shadow: 0 0 20px rgba(2, 57, 164, 0.2);
  position: relative;
  z-index: 2;
}
.tasks-status {
  cursor: pointer;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
}
.tasks-time {
  letter-spacing: -0.01em;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
}
.description-for-status {
  position: absolute;
  padding: 9px 16px;
  font-size: 0.85rem;
  box-shadow: 0 0 10px rgba(2, 57, 164, 0.2);
  white-space: nowrap;
  background: white;
  border-radius: 5px;
  top: 75%;
  z-index: 3;
}
.tasks-title {
  display: flex;
}
.executer {
  background: #F6F8FB;
  display: flex;
  justify-content: center;
  position: relative;
}
.executer-round {
  margin: auto;
  width: 40px;
  font-size: 1.8rem;
  height: 40px;
  background: #91B6FE;
  color: #FCFCFD;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.executer-oval {
  padding: 5px 11px;
  margin: auto;
  font-size: 0.85rem;
  border-radius: 14px;
  display: flex;
}
.container-for-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.container-for-arrow:hover {
  background: #4F8AFD;
}
.arrow-for-small-task {
  background: #4F8AFD;
  border-radius: 1px;
  width: 10px;
  height: 2px;
}
.project-now {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
}
.project-now-item {
  padding: 16px 26px 26px;
  background: white;
  box-shadow: 0 0 15px rgba(2, 57, 164, 0.05);
  border-radius: 10px;
}
.project-now-item:hover {
  box-shadow: 0 0 25px rgba(2, 57, 164, 0.15);
}
.project-now-item-title {
  line-height: 22px;
  color: #10141D;
  margin-bottom: 8px;
}
.executers {
  display: flex;
}
.project-now-status {
  display: grid;
  grid-template-columns: 21px 25%;
  margin-bottom: 21px;
}
.executers-item {
  border: 3px solid #FFFFFF;
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
@media (max-width: 1250px) {
  .last-tasks,.title-for-colon {
    grid-template-columns: 82px 340px 100px 82px;
    display: inline-grid;
  }
  .project-now {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 30px;
  }
  .tm-container-for-content-page {
    max-width: 604px;
  }
  .mobile {
    display: none;
  }
}
</style>