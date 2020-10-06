<template>
  <div class="tm-container-for-content-page">
    <div style="display: flex;align-items: center;justify-content: space-between">
      <div class="title-main-page">Мои задачи</div>
      <button class="button-for-add-task" @click="$store.commit('showTaskWindow', -1)">Добавить задачу</button>
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

export default {
  name: "tm-tasks-list",
  components: {
    tmControlFilters,
    tmMyTasksList,
    tmMyTasksTable
  },
  data() {
    return {
      view: true
    }
  },
  methods: {
    getView(data) {
      this.view=data;
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