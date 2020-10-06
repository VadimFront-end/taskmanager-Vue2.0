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
    <tmItemTask
        v-for="(task,index) in FILTERED"
        :key="index"
        :index="index"
        :lengthArray="FILTERED.length"
        :task="task"
        :style="{borderRadius: (index===FILTERED.length-1)&&(index===0) ? '14px': index===FILTERED.length-1 ? '0 0 14px 14px': index===0 ? '14px 14px 0 0' : ''}"/>
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
import tmItemTask from '../components/tm-item-task'

export default {
name: "tm-container-for-my-tasks",
  components: {
    tmContainerForDragAndDrop,
    tmCardForDragAndDrop,
    tmItemTask
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