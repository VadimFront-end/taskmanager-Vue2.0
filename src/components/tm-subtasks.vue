<template>
  <div class="tm-subtasks-table">
    <div class="container-for-subtasks">
    <div class="subtasks-title">
      <span style="margin-right: 45px">Статус</span>
      <span>Название подадачи</span>
    </div>
      <tmSubtasks
          v-for="(subtask,index) in subtasks"
          :style="{background: index%2 ? '#F6F8FB' : ''}"
          :key="index"
          :subtask="subtask"
          :indexSubTask="index"
          :indexTask="indexTask"
          :whereSubTasksShow="whereSubTasksShow"
          @click.native="indexFocus=index"
          :indexFocus="indexFocus"/>
      <div v-if="!creatingSubtask" class="add-subtask" @click="creatingSubtask=true;indexFocus=NaN">+ Добавить задачу</div>
      <div v-else class="add-subtask">
        <input class="subtask-description" style="border-bottom: 1px solid #889ABD" v-model.trim="newSubtask">
        <div class="edit-or-not" @click="createSubtask(true)">
          <svg class="my-pain1" width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1212 0.522327C10.327 0.317343 10.6047 0.201979 10.8944 0.201176C11.1841 0.200373 11.4624 0.314195 11.6693 0.518034C11.8762 0.721874 11.9949 0.999353 11.9998 1.29048C12.0048 1.58161 11.8955 1.86299 11.6957 2.0738L5.82705 9.44699C5.72619 9.55618 5.60445 9.6438 5.46913 9.70463C5.3338 9.76545 5.18766 9.79822 5.03944 9.80098C4.89123 9.80374 4.74398 9.77643 4.60651 9.72068C4.46903 9.66494 4.34416 9.5819 4.23934 9.47654L0.350925 5.56683C0.242598 5.46537 0.155712 5.34303 0.0954499 5.20709C0.0351876 5.07115 0.00278364 4.92441 0.00017159 4.77561C-0.00244046 4.62681 0.024793 4.47901 0.0802466 4.34102C0.1357 4.20303 0.218238 4.07768 0.322937 3.97245C0.427636 3.86722 0.55235 3.78426 0.68964 3.72852C0.82693 3.67279 0.973983 3.64541 1.12203 3.64804C1.27007 3.65066 1.41607 3.68323 1.55132 3.7438C1.68657 3.80437 1.80829 3.8917 1.90923 4.00058L4.98762 7.09318L10.0933 0.554835C10.1024 0.543389 10.1122 0.532531 10.1227 0.522327H10.1212Z"/>
          </svg>
        </div>
        <div class="edit-or-not" @click="createSubtask(false)">
          <svg class="my-pain2" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.52925 5.11853C6.46425 5.05354 6.46425 4.94771 6.52925 4.88272L9.70815 1.70715C10.0973 1.31635 10.0973 0.683901 9.70815 0.293101C9.31901 -0.0977002 8.68907 -0.0977002 8.29993 0.293101L5.11853 3.47117C5.05354 3.53616 4.94771 3.53616 4.88272 3.47117L1.70798 0.292267C1.31718 -0.096867 0.683901 -0.096867 0.293101 0.292267C-0.0977002 0.681401 -0.0977002 1.31135 0.293101 1.70048L3.47117 4.88105C3.53616 4.94605 3.53616 5.05187 3.47117 5.11687L0.292267 8.29243C-0.096867 8.68323 -0.096867 9.31568 0.292267 9.70648C0.681401 10.0973 1.31135 10.0973 1.70048 9.70648L4.88105 6.52841C4.94605 6.46342 5.05187 6.46342 5.11687 6.52841L8.29243 9.70732C8.68323 10.0964 9.31568 10.0964 9.70648 9.70732C10.0973 9.31818 10.0973 8.68823 9.70648 8.2991L6.52925 5.11853Z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tmSubtasks from '../components/tm-subtask'
import {mapGetters} from 'vuex'
export default {
  name: "tm-subtasks",
  components: {
    tmSubtasks
  },
  props: {
    subtasks: {
      type: Array,
      default() {
        return []
      }
    },
    indexTask: {
      type: Number,
      default() {
        return NaN;
      }
    },
    whereSubTasksShow: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      indexFocus: NaN,
      creatingSubtask: false,
      newSubtask: ''
    }
  },
  methods: {
    createSubtask(bool) {
      if (bool) {
        const newSubtask = {
          indexTask: this.whereSubTasksShow ? this.indexTask : this.TASKS.length - 5 + this.indexTask,
          subtask: this.newSubtask
        }
        this.$store.dispatch('createSubtask', newSubtask);
      }
      this.creatingSubtask = false;
      this.newSubtask = '';
    }
  },
  computed: {
    ...mapGetters([
        'TASKS'
    ])
  },
  watch: {
    indexFocus() {
      if (!Number.isNaN(this.indexFocus))this.creatingSubtask = false;
    }
  }
}
</script>

<style>
.subtasks-title {
  padding: 8px 16px;
  background: #EDF3FF;
}
.container-for-subtasks {
  width: 100%;
  margin: 0 auto 16px;
  box-shadow: 0 0 10px rgba(2, 57, 164, 0.15);
  border-radius: 0 0 14px 14px;
}
.tm-subtasks-table {
  padding: 0 16px;
  grid-column: 1/10;
  border-radius: 14px;
}
.subtask-description {
  white-space: nowrap;
  overflow: hidden;
  width: 555px;
  padding: 7px 4px;
  font-size: 1rem;
  margin-right: 20px;
}
.subtask-description:focus {
  border-bottom: 1px solid #4F8AFD;
  outline: none;
  color: #10141D;
}
.add-subtask {
  display: flex;
  align-items: center;
  color: #0356F6;
  cursor: pointer;
  height: 54px;
  padding: 0 102px;
}
.edit-or-not {
  width: 24px;
  height: 24px;
  box-shadow: 0 0 10px rgba(2, 57, 164, 0.13);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  cursor: pointer;
}
.edit-or-not:hover {
  box-shadow: 0 0 10px rgba(2, 57, 164, 0.25);
}
</style>