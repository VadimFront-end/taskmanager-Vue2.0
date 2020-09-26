<template>
 <div class="tm-container-for-content-page">
   <div class="title-main-page">Последние задачи</div>
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
       v-for="(task,index) in LASTTASKS"
       :key="index"
       class="last-tasks"
       :style="{borderRadius: index===LASTTASKS.length-1 ? '0 0 14px 14px' : index===0 ? '14px 14px 0 0' : ''}">
     <div class="tasks-status">
       <svg v-if="task.status===2" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M0 5.3444H9.50538L6.05604 1.87436L6.97752 0.947357L12 5.99999L6.97752 11.0526L6.05604 10.1256L9.50538 6.65558H0V5.3444Z" fill="#4F8AFD"/>
       </svg>
       <svg v-if="task.status===3" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M6 0C2.6916 0 0 2.6916 0 6C0 9.3084 2.6916 12 6 12C9.3084 12 12 9.3084 12 6C12 2.6916 9.3084 0 6 0ZM6 10.8C3.3534 10.8 1.2 8.6466 1.2 6C1.2 3.3534 3.3534 1.2 6 1.2C8.6466 1.2 10.8 3.3534 10.8 6C10.8 8.6466 8.6466 10.8 6 10.8Z" fill="#2CCF11"/>
         <path d="M4.79941 6.95213L3.42001 5.57513L2.57281 6.42473L4.80062 8.64773L8.82421 4.62413L7.97581 3.77573L4.79941 6.95213Z" fill="#2CCF11"/>
       </svg>
       <div v-if="task.status===1" class="status-none" style="width: 15px;height: 15px"></div>
     </div>
     <div class="tasks-title">
       <div style="margin: auto 15px">{{task.title}}</div>
     </div>
     <div class="executer">
       <div class="executer-round">{{task.executer[0]}}</div>
     </div>
     <div class="tasks-status">{{task.deadline}}</div>
     <div class="executer mobile">
       <div class="executer-oval">
         <div style="margin: auto">{{task.difficulty}}</div>
       </div>
     </div>
     <div class="tasks-status mobile">{{task.time}}</div>
     <div class="executer mobile">
       <div class="executer-round">
         <div style="margin: auto">{{task.author[0]}}</div>
       </div>
     </div>
     <div class="tasks-title mobile">
       <div style="margin: auto 15px;font-size: 0.85rem">{{task.description}}</div>
     </div>
     <div class="container-for-arrow mobile">
       <div class="arrow-for-small-task" style="transform: rotate(45deg);margin-right: -2px"></div>
       <div class="arrow-for-small-task" style="transform: rotate(-45deg);margin-left: -2px"></div>
     </div>
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
import {mapGetters} from 'vuex'

export default {
  name: "tm-main-page",
  computed: {
    ...mapGetters([
        'LASTTASKS'
    ])
  }
}
</script>

<style>
.tm-container-for-content-page {
  width: 100%;
  padding-left: 70px;
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
.tasks-status {
  justify-content: center;
  align-items: center;
  display: flex;
}
.tasks-title {
  display: flex;
}
.executer {
  background: #F6F8FB;
  display: flex;
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
  background: #F1EAA5;
  border-radius: 14px;
  display: flex;
}
.container-for-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.arrow-for-small-task {
  background: #B0BCD3;
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