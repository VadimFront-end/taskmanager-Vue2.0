<template>
  <div class="mask-modal-window-task">
    <div class="modal-window" style="width: 970px">
      <div style="display: flex;justify-content: space-between">
        <div style="color: #10141D;margin-bottom: 8px;font-weight: 600;font-size: 1.4rem">Запланировать задачи на день</div>
        <div class="button-to-exit" @click="$emit('closeWindowPlan')">
          <div class="part-of-exit" style="transform: rotate(45deg)"></div>
          <div class="part-of-exit" style="transform: rotate(-45deg)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "modal-window-day-plan"
}
</script>

<style scoped>

</style>