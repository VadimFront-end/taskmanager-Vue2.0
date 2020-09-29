<template>
  <div class="tm-container-for-content-page">
    <modalWindowTask v-show="showWindow" @closeWindow="closeWindow" />
    <div style="display: flex;align-items: center;justify-content: space-between">
      <div class="title-main-page">Мои задачи</div>
      <button class="button-for-add-task" @click="showWindow=true">Добавить задачу</button>
    </div>
    <tmControlFilters @view="getView"/>
    <tmMyTasksList v-if="view"/>
    <tmMyTasksTable v-else />
  </div>
</template>

<script>
import tmControlFilters from '../components/tm-control-filters'
import tmMyTasksList from '../components/tm-my-tasks-list'
import tmMyTasksTable from '../components/tm-my-tasks-table'
import modalWindowTask from '../components/modal-window-task'

export default {
  name: "tm-tasks-list",
  components: {
    tmControlFilters,
    tmMyTasksList,
    tmMyTasksTable,
    modalWindowTask
  },
  data() {
    return {
      view: true,
      showWindow: false
    }
  },
  methods: {
    getView(data) {
      this.view=data;
    },
    closeWindow(data) {
      this.showWindow=data;
    }
  },
  watch: {
    showWindow() {
      this.$store.commit('nullIndex');
    }
  }
}
</script>

<style>
.button-for-add-task {
  cursor: pointer;
  color: #FCFCFD;
  background: #4F8AFD;
  border-radius: 22px;
  font-weight: 500;
  padding: 8px 24px;
  border: none;
}
.button-for-add-task:hover {
  box-shadow: 0 0 10px rgba(2, 57, 164, 0.3);
}
.button-for-add-task:active {
  background: #0356F6;
  box-shadow: 0 0 15px rgba(2, 57, 164, 0.25);
}
</style>