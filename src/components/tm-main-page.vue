<template>
 <div class="tm-container-for-content-page">
   <modalWindowDayPlan v-if="isShowDayPlan" @closeWindowPlan="closeWindowPlan"/>
   <div style="display: flex;align-items: center;justify-content: space-between">
     <div class="title-main-page">Последние задачи</div>
     <button class="button-for-add-task" @click="isShowDayPlan=true">Запланировать день</button>
   </div>
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
   <tmItemTask
       v-for="(task,index) in LAST_TASKS"
       :key="index"
       :index="index"
       :lengthArray="LAST_TASKS.length"
       :task="task"
       :style="{borderRadius: (index===LAST_TASKS.length-1)&&(index===0) ? '14px': index===LAST_TASKS.length-1 ? '0 0 14px 14px': index===0 ? '14px 14px 0 0' : ''}"/>
   <div class="title-main-page">Текущие проекты</div>
   <div class="project-now">
     <tmProject
         v-for="(project,index) in LAST_PROJECTS"
         :project="project"
         :key="index"/>
   </div>
 </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import tmItemTask from '../components/tm-item-task'
import tmProject from '../components/tm-project-now'
import modalWindowDayPlan from '../components/modal-window-day-plan'

export default {
  name: "tm-main-page",
  data() {
    return {
      isShowDayPlan: false
    }
  },
  components: {
    tmItemTask,
    tmProject,
    modalWindowDayPlan
  },
  computed: {
    ...mapGetters([
        'LAST_TASKS',
        'PROJECTS',
        'GET_ALL_USERS',
        'LAST_PROJECTS'
    ])
  },
  methods: {
    closeWindowPlan() {
      this.isShowDayPlan=false;
    },
     ...mapActions([
      'GET_USER_TASKS',
      'GET_USERS'
    ])
  },
  mounted() {
    this.GET_USERS();
    this.GET_USER_TASKS();
    this.$store.dispatch('getAllProjects');
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
  font-weight: 700;
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
.project-now {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
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