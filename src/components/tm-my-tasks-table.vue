<template>
  <div id="tm-container-for-my-tasks-table">
    <div class="column-for-tasks">
      <div class="title-status-tasks">Нужно сделать</div>
      <tmTaskInTable
          v-for="(task,index) in STATUSTODO"
          :key="index"
          :task="task"
          class="container-for-task-in-table"/>
    </div>
    <div class="column-for-tasks">
      <div class="title-status-tasks">В работе</div>
      <tmTaskInTable
          v-for="(task,index) in STATUSWORK"
          :key="index"
          :task="task"
          class="container-for-task-in-table"/>
    </div>
    <div class="column-for-tasks">
      <div class="title-status-tasks">Готово</div>
      <tmTaskInTable
          v-for="(task,index) in STATUSOK"
          :key="index"
          :task="task"
          class="container-for-task-in-table"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import tmTaskInTable from '../components/tm-task-in-table'

export default {
  name: "tm-my-task-table",
  components: {
    tmTaskInTable
  },
  computed: {
    ...mapGetters([
      'STATUSWORK',
      'STATUSOK',
      'STATUSTODO'
    ])
  }
}
</script>

<style>
#tm-container-for-my-tasks-table {
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
}
.column-for-tasks {
  padding: 16px;
  background: #D9E2EE;
  border-radius: 14px;
}
.title-status-tasks {
  font-weight: 600;
  font-size: 1.15rem;
  color: #393939;
  margin-bottom: 16px;
}
.container-for-task-in-table {
  background: white;
  padding: 12px 16px 12px;
  box-shadow: 0 0 15px rgba(2, 57, 164, 0.05);
  border-radius: 14px;
  margin-bottom: 8px;
}
</style>