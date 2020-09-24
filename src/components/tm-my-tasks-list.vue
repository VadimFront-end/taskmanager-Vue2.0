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
        v-show="task.status===3&&STATUSFILTER.statusToDo||task.status===2&&STATUSFILTER.statusWork||!task.status===1&&STATUSFILTER.statusDane"
        :style="{borderRadius: index===TASKS.length-1 ? '0 0 14px 14px' : index===0 ? '14px 14px 0 0' : ''}">
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
      <div class="container-for-arrow mobile">
        <div class="arrow-for-small-task" style="transform: rotate(45deg);margin-right: -2px"></div>
        <div class="arrow-for-small-task" style="transform: rotate(-45deg);margin-left: -2px"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
name: "tm-container-for-my-tasks",
  computed: {
    ...mapGetters([
      'TASKS',
      'STATUSFILTER'
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
</style>