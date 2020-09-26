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
        {{subtask}}
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
  }
}
</script>

<style>
.tm-subtasks {
  padding: 16px 29px;
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
}
.tm-subtasks-table {
  padding: 0 16px;
  grid-column: 1/10;
  border-radius: 14px;
}
</style>