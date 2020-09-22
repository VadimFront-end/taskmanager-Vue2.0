<template>
  <div class="tm-container-for-content-page">
    <div style="display: flex;align-items: center;justify-content: space-between">
      <div class="title-main-page">Мои задачи</div>
      <button class="button-for-add-task">Добавить задачу</button>
    </div>
    <tmControlFilters/>
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
        :style="{borderRadius: index===TASKS.length-1 ? '0 0 14px 14px' : index===0 ? '14px 14px 0 0' : ''}">
      <div class="tasks-status">
        <div style="margin: auto">{{task.status}}</div>
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
        <div class="executer-oval">
          <div style="margin: auto">{{task.difficulty}}</div>
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
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import tmControlFilters from '../components/tm-control-filters'

export default {
  name: "tm-tasks-list",
  components: {
    tmControlFilters
  },
  computed: {
    ...mapGetters([
      'TASKS'
    ])
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