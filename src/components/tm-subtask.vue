<template>
  <div class="tm-subtasks">
    <div
        style="margin-right: 39px"
        class="tasks-status"
        @click="$emit('openThisTable', indexSubTask)"
        @mouseout="ShowStatus=false"
        @mousemove="ShowStatus=true">
      <svg v-if="subtask.status===2" width="16" height="16" viewBox="0 0 12 12" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 5.3444H9.50538L6.05604 1.87436L6.97752 0.947357L12 5.99999L6.97752 11.0526L6.05604 10.1256L9.50538 6.65558H0V5.3444Z"
            fill="#4F8AFD"/>
      </svg>
      <svg v-if="subtask.status===3" width="16" height="16" viewBox="0 0 12 12" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6 0C2.6916 0 0 2.6916 0 6C0 9.3084 2.6916 12 6 12C9.3084 12 12 9.3084 12 6C12 2.6916 9.3084 0 6 0ZM6 10.8C3.3534 10.8 1.2 8.6466 1.2 6C1.2 3.3534 3.3534 1.2 6 1.2C8.6466 1.2 10.8 3.3534 10.8 6C10.8 8.6466 8.6466 10.8 6 10.8Z"
            fill="#2CCF11"/>
        <path
            d="M4.79941 6.95213L3.42001 5.57513L2.57281 6.42473L4.80062 8.64773L8.82421 4.62413L7.97581 3.77573L4.79941 6.95213Z"
            fill="#2CCF11"/>
      </svg>
      <svg v-if="subtask.status===1" width="16" height="16" viewBox="0 0 16 16" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8 0C3.5888 0 0 3.5888 0 8C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8C16 3.5888 12.4112 0 8 0ZM8 14.4C4.4712 14.4 1.6 11.5288 1.6 8C1.6 4.4712 4.4712 1.6 8 1.6C11.5288 1.6 14.4 4.4712 14.4 8C14.4 11.5288 11.5288 14.4 8 14.4Z"
            fill="#889ABD"/>
      </svg>
      <svg :style="{transform: indexSubTask===openThisTableStatuses ? 'rotate(180deg)': ''}" style="margin-left: 4px"
           width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.70345 5.30376C5.31378 5.68944 4.68622 5.68944 4.29655 5.30376L0.666294 1.71074C0.031322 1.08228 0.476353 5.37548e-08 1.36975 -2.4348e-08L8.63026 -6.59082e-07C9.52365 -7.37185e-07 9.96868 1.08228 9.33371 1.71074L5.70345 5.30376Z"
            fill="#B0BCD3"/>
      </svg>
      <div class="description-for-status" v-show="ShowStatus">
        <div
            v-show="subtask.status===3"
            style="color: #27B310"
        >Готово
        </div>
        <div
            v-show="subtask.status===2"
            style="color: #0356F6"
        >В работе
        </div>
        <div
            v-show="subtask.status===1"
            style="color: #576F9D"
        >Нужно сделать
        </div>
      </div>
      <div class="select-status-for-task" v-show="openThisTableStatuses===indexSubTask">
        <div
            style="color: #576F9D"
            :style="{background: subtask.status===1 ? '#E5EBF3': ''}"
            class="container-for-statuses"
            @click="selectThisStatus(1)"
        >Нужно сделать
          <svg v-show="subtask.status===1" width="10" height="10" viewBox="0 0 10 10" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.43434 1.11228C8.60579 0.934339 8.83724 0.834197 9.07865 0.8335C9.32006 0.832802 9.55204 0.931606 9.72442 1.10855C9.89681 1.28549 9.99575 1.52636 9.99987 1.77908C10.004 2.03179 9.91293 2.27605 9.74641 2.45904L4.85587 8.85938C4.77182 8.95416 4.67038 9.03023 4.55761 9.08302C4.44483 9.13582 4.32305 9.16427 4.19954 9.16667C4.07602 9.16906 3.95332 9.14535 3.83876 9.09696C3.72419 9.04857 3.62013 8.97649 3.53278 8.88503L0.292438 5.49118C0.202165 5.40312 0.12976 5.29691 0.0795416 5.17891C0.029323 5.06091 0.0023197 4.93353 0.000142992 4.80436C-0.00203372 4.6752 0.0206608 4.5469 0.0668722 4.42712C0.113084 4.30733 0.181865 4.19852 0.269114 4.10717C0.356363 4.01583 0.460292 3.94381 0.5747 3.89543C0.689108 3.84705 0.811652 3.82329 0.935022 3.82557C1.05839 3.82785 1.18006 3.85612 1.29277 3.9087C1.40547 3.96127 1.50691 4.03708 1.59103 4.13159L4.15635 6.81614L8.41107 1.1405C8.41866 1.13056 8.42684 1.12113 8.43557 1.11228H8.43434Z"
                  fill="#576F9D"/>
          </svg>
        </div>
        <div
            style="color: #0356F6"
            :style="{background: subtask.status===2 ? '#EDF3FF': ''}"
            @click="selectThisStatus(2)"
            class="container-for-statuses"
        >В работе
          <svg v-show="subtask.status===2" width="10" height="10" viewBox="0 0 10 10" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.43434 1.11228C8.60579 0.934339 8.83724 0.834197 9.07865 0.8335C9.32006 0.832802 9.55204 0.931606 9.72442 1.10855C9.89681 1.28549 9.99575 1.52636 9.99987 1.77908C10.004 2.03179 9.91293 2.27605 9.74641 2.45904L4.85587 8.85938C4.77182 8.95416 4.67038 9.03023 4.55761 9.08302C4.44483 9.13582 4.32305 9.16427 4.19954 9.16667C4.07602 9.16906 3.95332 9.14535 3.83876 9.09696C3.72419 9.04857 3.62013 8.97649 3.53278 8.88503L0.292438 5.49118C0.202165 5.40312 0.12976 5.29691 0.0795416 5.17891C0.029323 5.06091 0.0023197 4.93353 0.000142992 4.80436C-0.00203372 4.6752 0.0206608 4.5469 0.0668722 4.42712C0.113084 4.30733 0.181865 4.19852 0.269114 4.10717C0.356363 4.01583 0.460292 3.94381 0.5747 3.89543C0.689108 3.84705 0.811652 3.82329 0.935022 3.82557C1.05839 3.82785 1.18006 3.85612 1.29277 3.9087C1.40547 3.96127 1.50691 4.03708 1.59103 4.13159L4.15635 6.81614L8.41107 1.1405C8.41866 1.13056 8.42684 1.12113 8.43557 1.11228H8.43434Z"
                  fill="#0356F6"/>
          </svg>
        </div>
        <div
            style="color: #27B310;border-radius: 0 0 5px 5px"
            :style="{background: subtask.status===3 ? '#DFFCDB': ''}"
            @click="selectThisStatus(3)"
            class="container-for-statuses"
        >Готово
          <svg v-show="subtask.status===3" width="10" height="10" viewBox="0 0 10 10" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.43434 1.11228C8.60579 0.934339 8.83724 0.834197 9.07865 0.8335C9.32006 0.832802 9.55204 0.931606 9.72442 1.10855C9.89681 1.28549 9.99575 1.52636 9.99987 1.77908C10.004 2.03179 9.91293 2.27605 9.74641 2.45904L4.85587 8.85938C4.77182 8.95416 4.67038 9.03023 4.55761 9.08302C4.44483 9.13582 4.32305 9.16427 4.19954 9.16667C4.07602 9.16906 3.95332 9.14535 3.83876 9.09696C3.72419 9.04857 3.62013 8.97649 3.53278 8.88503L0.292438 5.49118C0.202165 5.40312 0.12976 5.29691 0.0795416 5.17891C0.029323 5.06091 0.0023197 4.93353 0.000142992 4.80436C-0.00203372 4.6752 0.0206608 4.5469 0.0668722 4.42712C0.113084 4.30733 0.181865 4.19852 0.269114 4.10717C0.356363 4.01583 0.460292 3.94381 0.5747 3.89543C0.689108 3.84705 0.811652 3.82329 0.935022 3.82557C1.05839 3.82785 1.18006 3.85612 1.29277 3.9087C1.40547 3.96127 1.50691 4.03708 1.59103 4.13159L4.15635 6.81614L8.41107 1.1405C8.41866 1.13056 8.42684 1.12113 8.43557 1.11228H8.43434Z"
                  fill="#27B210"/>
          </svg>
        </div>
      </div>
    </div>
    <input
        :id="'editTask' + indexSubTask"
        class="subtask-description"
        disabled
        v-model="subtaskToEdit"
        @focus="rememberSubtask=subtaskToEdit"
        :style="{background: indexSubTask%2 ? '#F6F8FB' : '#FFFFFF'}"
        @blur="kostil"/>
    <div v-if="editingSubtask&&indexSubTask===indexFocus" style="display: flex">
      <div class="edit-or-not" @click="editTask(true)">
        <svg class="my-pain1" width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.1212 0.522327C10.327 0.317343 10.6047 0.201979 10.8944 0.201176C11.1841 0.200373 11.4624 0.314195 11.6693 0.518034C11.8762 0.721874 11.9949 0.999353 11.9998 1.29048C12.0048 1.58161 11.8955 1.86299 11.6957 2.0738L5.82705 9.44699C5.72619 9.55618 5.60445 9.6438 5.46913 9.70463C5.3338 9.76545 5.18766 9.79822 5.03944 9.80098C4.89123 9.80374 4.74398 9.77643 4.60651 9.72068C4.46903 9.66494 4.34416 9.5819 4.23934 9.47654L0.350925 5.56683C0.242598 5.46537 0.155712 5.34303 0.0954499 5.20709C0.0351876 5.07115 0.00278364 4.92441 0.00017159 4.77561C-0.00244046 4.62681 0.024793 4.47901 0.0802466 4.34102C0.1357 4.20303 0.218238 4.07768 0.322937 3.97245C0.427636 3.86722 0.55235 3.78426 0.68964 3.72852C0.82693 3.67279 0.973983 3.64541 1.12203 3.64804C1.27007 3.65066 1.41607 3.68323 1.55132 3.7438C1.68657 3.80437 1.80829 3.8917 1.90923 4.00058L4.98762 7.09318L10.0933 0.554835C10.1024 0.543389 10.1122 0.532531 10.1227 0.522327H10.1212Z"/>
        </svg>
      </div>
      <div class="edit-or-not" @click="editTask(false)">
        <svg class="my-pain2" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M6.52925 5.11853C6.46425 5.05354 6.46425 4.94771 6.52925 4.88272L9.70815 1.70715C10.0973 1.31635 10.0973 0.683901 9.70815 0.293101C9.31901 -0.0977002 8.68907 -0.0977002 8.29993 0.293101L5.11853 3.47117C5.05354 3.53616 4.94771 3.53616 4.88272 3.47117L1.70798 0.292267C1.31718 -0.096867 0.683901 -0.096867 0.293101 0.292267C-0.0977002 0.681401 -0.0977002 1.31135 0.293101 1.70048L3.47117 4.88105C3.53616 4.94605 3.53616 5.05187 3.47117 5.11687L0.292267 8.29243C-0.096867 8.68323 -0.096867 9.31568 0.292267 9.70648C0.681401 10.0973 1.31135 10.0973 1.70048 9.70648L4.88105 6.52841C4.94605 6.46342 5.05187 6.46342 5.11687 6.52841L8.29243 9.70732C8.68323 10.0964 9.31568 10.0964 9.70648 9.70732C10.0973 9.31818 10.0973 8.68823 9.70648 8.2991L6.52925 5.11853Z"/>
        </svg>
      </div>
      <div v-if="!$v.subtaskToEdit.required" class="error" style="margin: 0 20px">Нужно название подзадачи</div>
      <div v-else-if="!$v.subtaskToEdit.maxLength" class="error" style="margin: 0 20px">Максиум 64 символа</div>
      <div v-else-if="!$v.subtaskToEdit.passwordSigns" class="error" style="margin: 0 20px">Имеются запрещенные символы</div>
    </div>
    <div style="display: flex;align-items: center" v-else>
      <label :for="'editTask' + indexSubTask" class="edit-pan">
        <svg @click="startEditSubtask" width="16" height="16" viewBox="0 0 16 16" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M16 4.19201C16.0006 4.08673 15.9804 3.98236 15.9406 3.88489C15.9008 3.78742 15.8421 3.69877 15.768 3.62401L12.376 0.232013C12.3012 0.157868 12.2126 0.0992081 12.1151 0.0593964C12.0176 0.0195847 11.9133 -0.000595343 11.808 1.33714e-05C11.7027 -0.000595343 11.5983 0.0195847 11.5009 0.0593964C11.4034 0.0992081 11.3147 0.157868 11.24 0.232013L8.97598 2.49601L0.231983 11.24C0.157838 11.3148 0.0991776 11.4034 0.0593659 11.5009C0.0195542 11.5984 -0.000625861 11.7027 -1.71461e-05 11.808V15.2C-1.71461e-05 15.4122 0.0842683 15.6157 0.234297 15.7657C0.384327 15.9157 0.58781 16 0.799983 16H4.19198C4.30393 16.0061 4.4159 15.9886 4.52064 15.9486C4.62538 15.9087 4.72055 15.8471 4.79998 15.768L13.496 7.02401L15.768 4.80001C15.841 4.72248 15.9005 4.63324 15.944 4.53601C15.9517 4.47225 15.9517 4.40778 15.944 4.34401C15.9477 4.30677 15.9477 4.26925 15.944 4.23201L16 4.19201ZM3.86398 14.4H1.59998V12.136L9.54398 4.19201L11.808 6.45601L3.86398 14.4ZM12.936 5.32801L10.672 3.06401L11.808 1.93601L14.064 4.19201L12.936 5.32801Z"/>
        </svg>
      </label>
      <div class="urn">
        <svg @click="deletingSubtask=true;editingSubtask=false" width="16" height="16" viewBox="0 0 16 16" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M4.99166 1.44H4.83333C4.92041 1.44 4.99166 1.368 4.99166 1.28V1.44H11.0083V1.28C11.0083 1.368 11.0796 1.44 11.1667 1.44H11.0083V2.88H12.4333V1.28C12.4333 0.574 11.8653 0 11.1667 0H4.83333C4.13468 0 3.56666 0.574 3.56666 1.28V2.88H4.99166V1.44ZM14.9667 2.88H1.03333C0.683015 2.88 0.399994 3.166 0.399994 3.52V4.16C0.399994 4.248 0.471244 4.32 0.558327 4.32H1.75374L2.2426 14.78C2.27426 15.462 2.83239 16 3.50729 16H12.4927C13.1696 16 13.7257 15.464 13.7574 14.78L14.2462 4.32H15.4417C15.5287 4.32 15.6 4.248 15.6 4.16V3.52C15.6 3.166 15.317 2.88 14.9667 2.88ZM12.3403 14.56H3.65968L3.18072 4.32H12.8193L12.3403 14.56Z"/>
          <path
              d="M5.51967 7.7891C5.21526 7.48148 5.21526 6.98275 5.51967 6.67513C5.82408 6.36752 6.31762 6.36752 6.62203 6.67513L10.4803 10.574C10.7847 10.8816 10.7847 11.3804 10.4803 11.688C10.1759 11.9956 9.68235 11.9956 9.37794 11.688L5.51967 7.7891Z"/>
          <path
              d="M10.4803 7.7891C10.7847 7.48148 10.7847 6.98275 10.4803 6.67513C10.1759 6.36752 9.68236 6.36752 9.37795 6.67513L5.51969 10.574C5.21528 10.8816 5.21528 11.3804 5.51969 11.688C5.8241 11.9956 6.31764 11.9956 6.62205 11.688L10.4803 7.7891Z"/>
        </svg>
      </div>
    </div>
    <div v-show="deletingSubtask&&indexSubTask===indexFocus" style="display: flex;margin-left: 12px">
      <div>Вы точно хотите удалить задачу?</div>
      <div @click="deleteSubtask(true)" class="only-for-hover1">Удалить</div>
      <div @click="deleteSubtask(false)" class="only-for-hover2">Назад</div>
    </div>
  </div>
</template>

<script>

import {maxLength, required} from "vuelidate/lib/validators";

export default {
  name: "tm-subtask",
  props: {
    subtask: {
      type: Object,
      default() {
        return {}
      }
    },
    indexSubTask: {
      type: Number,
      default() {
        return NaN;
      }
    },
    indexTask: {
      type: Number,
      default() {
        return NaN;
      }
    },
    indexFocus: {
      type: Number,
      default() {
        return NaN
      }
    },
    isProject: {
      type: Boolean,
      default() {
        return false;
      }
    },
    openThisTableStatuses: {
      type: Number,
      default() {
        return NaN;
      }
    }
  },
  data() {
    return {
      deletingSubtask: false,
      editingSubtask: false,
      subtaskToEdit: this.subtask.title,
      ShowStatus: false
    }
  },
  validations: {
    subtaskToEdit: {
        required,
        maxLength: maxLength(64),
        passwordSigns(newSubtask) {
          return /^[-0-9A-Za-zА-Яа-яЁё.,!#$%&"*+/=?^_`{|}~@\s]+$/.test(newSubtask);
        }
    }
  },
  methods: {
    deleteSubtask(bool) {
      if (bool) {
          const deleteSubtask = {
            indexTask: this.indexTask,
            indexSubtask: this.indexSubTask
          }
          this.$store.dispatch('deleteSubtask', deleteSubtask);
      }
      this.deletingSubtask = false;
    },
    editTask(bool) {
      if (bool) {
        if(!this.$v.subtaskToEdit.$invalid) {
          const editedSubtask = {
            newTitle: this.subtaskToEdit,
            indexSubtask: this.indexSubTask,
            indexTask: this.indexTask,
          }
          this.rememberSubtask = this.subtaskToEdit;
          this.$store.dispatch('editSubtaskTitle', editedSubtask);
        }
      }
      this.editingSubtask = false;
      document.getElementById(`editTask${this.indexSubTask}`).setAttribute('disabled', 'disabled');
    },
    kostil() {
      setTimeout(() => {
        this.subtaskToEdit = this.rememberSubtask;
        this.editingSubtask = false;
        document.getElementById(`editTask${this.indexSubTask}`).setAttribute('disabled', 'disabled');
      }, 100);
    },
    startEditSubtask() {
      setTimeout(() => {
        this.editingSubtask = true;
        this.deletingSubtask = false;
      }, 0);
      document.getElementById(`editTask${this.indexSubTask}`).removeAttribute('disabled');
    },
    selectThisStatus(status) {
      const newStatus = {
        status,
        indexTask: this.indexTask,
        indexSubtask: this.indexSubTask
      }
      this.$store.dispatch('editStatusSubtask', newStatus);
    }
  },
  watch: {
    indexFocus() {
      if (this.indexSubTask !== this.indexFocus) {
        this.deletingSubtask = false;
        this.editingSubtask = false;
      }
    },
    subtask() {
      this.subtaskToEdit = this.subtask.title;
    }
  }
}
</script>
<style>
.tm-subtasks {
  height: 48px;
  padding: 0 29px;
  display: flex;
  align-items: center;
}

.only-for-hover1 {
  cursor: pointer;
  margin: 0 16px;
  color: #EC1B1B;
}

.only-for-hover1:hover {
  color: #CA1111;
}

.only-for-hover2 {
  cursor: pointer;
  color: #485C83;
}

.only-for-hover2:hover {
  color: #10141D;
}

.urn svg {
  fill: #EC1B1B;
  cursor: pointer;
}

.urn svg:hover {
  fill: #CA1111;
}

.edit-or-not:active {
  background: #4F8AFD;
  box-shadow: 0 0 15px rgba(2, 57, 164, 0.2);
}

.edit-or-not:active svg {
  fill: #FFFFFF;
}

.my-pain1 {
  fill: #2CCF11;
}

.my-pain2 {
  fill: #EC1B1B;
}

.edit-pan svg {
  margin-right: 20px;
  cursor: pointer;
  fill: #889ABD;
}

.edit-pan svg:hover {
  fill: #485C83;
}
</style>