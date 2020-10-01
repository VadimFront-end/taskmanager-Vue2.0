<template>
  <div class="tm-task-in-table">
    <div style="line-height: 21px;margin-bottom: 8px">{{task.title}}</div>
    <div style="color: #485C83;margin-bottom: 8px">Выполнить до {{task.deadline}}</div>
    <div style="color: #485C83;margin-bottom: 8px">Время на задачу: {{task.time}}</div>
    <div style="display: flex;align-items: flex-end;justify-content: space-between">
      <div class="executer-round" style="margin: 8px 0 0">{{task.executer[0]}}</div>
      <div class="executer-oval" style="margin: 0" :style="{background: task.difficulty===3 ? '#F3B6B8': task.difficulty===2 ? '#F1EAA5': '#B9ECB5'}">
        <div>{{task.difficulty===3 ? 'Сложная': task.difficulty===2 ? 'Средняя': 'Легкая'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tm-task-in-table",
  props: {
    task: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>