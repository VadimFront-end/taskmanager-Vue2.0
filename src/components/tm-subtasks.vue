<template>
  <div class="tm-subtasks-table">
    <div class="container-for-subtasks">
    <div class="subtasks-title">
      <span style="margin-right: 45px">Статус</span>
      <span>Название подадачи</span>
    </div>
      <div
          class="tm-subtasks"
          v-for="(subtask,index) in subtasks"
          :style="{background: index%2 ? '#F6F8FB' : ''}"
          :key="index"
          :subtask="subtask"
      >
        <svg style="margin-right: 4px;display: none" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 5.3444H9.50538L6.05604 1.87436L6.97752 0.947357L12 5.99999L6.97752 11.0526L6.05604 10.1256L9.50538 6.65558H0V5.3444Z" fill="#4F8AFD"/>
        </svg>
        <svg style="margin-right: 4px" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0C2.6916 0 0 2.6916 0 6C0 9.3084 2.6916 12 6 12C9.3084 12 12 9.3084 12 6C12 2.6916 9.3084 0 6 0ZM6 10.8C3.3534 10.8 1.2 8.6466 1.2 6C1.2 3.3534 3.3534 1.2 6 1.2C8.6466 1.2 10.8 3.3534 10.8 6C10.8 8.6466 8.6466 10.8 6 10.8Z" fill="#2CCF11"/>
          <path d="M4.79941 6.95213L3.42001 5.57513L2.57281 6.42473L4.80062 8.64773L8.82421 4.62413L7.97581 3.77573L4.79941 6.95213Z" fill="#2CCF11"/>
        </svg>
        <div class="status-none" style="width: 15px;height: 15px;margin: 0 4px 0;display: none"></div>
        <svg style="margin-right: 40px" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.70345 5.30376C5.31378 5.68944 4.68622 5.68944 4.29655 5.30376L0.666294 1.71074C0.031322 1.08228 0.476353 5.37548e-08 1.36975 -2.4348e-08L8.63026 -6.59082e-07C9.52365 -7.37185e-07 9.96868 1.08228 9.33371 1.71074L5.70345 5.30376Z" fill="#B0BCD3"/>
        </svg>
        <div contenteditable="true" class="subtask-description">{{subtask}}</div>
        <svg @click="deleteOrNoDelete=true;indexDel=index;" style="cursor: pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.99166 1.44H4.83333C4.92041 1.44 4.99166 1.368 4.99166 1.28V1.44H11.0083V1.28C11.0083 1.368 11.0796 1.44 11.1667 1.44H11.0083V2.88H12.4333V1.28C12.4333 0.574 11.8653 0 11.1667 0H4.83333C4.13468 0 3.56666 0.574 3.56666 1.28V2.88H4.99166V1.44ZM14.9667 2.88H1.03333C0.683015 2.88 0.399994 3.166 0.399994 3.52V4.16C0.399994 4.248 0.471244 4.32 0.558327 4.32H1.75374L2.2426 14.78C2.27426 15.462 2.83239 16 3.50729 16H12.4927C13.1696 16 13.7257 15.464 13.7574 14.78L14.2462 4.32H15.4417C15.5287 4.32 15.6 4.248 15.6 4.16V3.52C15.6 3.166 15.317 2.88 14.9667 2.88ZM12.3403 14.56H3.65968L3.18072 4.32H12.8193L12.3403 14.56Z" fill="#EC1B1B"/>
          <path d="M5.51967 7.7891C5.21526 7.48148 5.21526 6.98275 5.51967 6.67513C5.82408 6.36752 6.31762 6.36752 6.62203 6.67513L10.4803 10.574C10.7847 10.8816 10.7847 11.3804 10.4803 11.688C10.1759 11.9956 9.68235 11.9956 9.37794 11.688L5.51967 7.7891Z" fill="#EC1B1B"/>
          <path d="M10.4803 7.7891C10.7847 7.48148 10.7847 6.98275 10.4803 6.67513C10.1759 6.36752 9.68236 6.36752 9.37795 6.67513L5.51969 10.574C5.21528 10.8816 5.21528 11.3804 5.51969 11.688C5.8241 11.9956 6.31764 11.9956 6.62205 11.688L10.4803 7.7891Z" fill="#EC1B1B"/>
        </svg>
        <div v-show="deleteOrNoDelete&&index===indexDel" style="display: flex;margin-left: 12px">
          <div>Вы точно хотите удалить задачу?</div>
          <div @click="deleteOrNoDelete=false" style="cursor: pointer;margin: 0 16px;color: #EC1B1B;">Удалить</div>
          <div @click="deleteOrNoDelete=false" style="cursor: pointer;color: #485C83">Назад</div>
        </div>
      </div>
      <div v-if="!creatingSubtask" class="add-subtask" @click="creatingSubtask=true">+ Добавить задачу</div>
      <div v-else class="add-subtask">
        <div contenteditable="true" class="subtask-description"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tm-subtasks",
  props: {
    subtasks: {
      type: Array,
      default() {
        return []
      }
    },
    index: {
      type: Number,
      default() {
        return NaN;
      }
    }
  },
  data() {
    return {
      deleteOrNoDelete: false,
      indexDel: NaN,
      creatingSubtask: false
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
  padding: 16px 102px 24px;
}
</style>