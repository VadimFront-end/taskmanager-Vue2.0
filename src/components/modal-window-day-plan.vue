<template>
  <div class="mask-modal-window-task">
    <div class="modal-window" style="width: 970px;box-sizing: border-box">
      <div style="display: flex;justify-content: space-between">
        <div style="color: #10141D;margin-bottom: 8px;font-weight: 600;font-size: 1.4rem">Запланировать задачи на день</div>
        <div class="button-to-exit" @click="$emit('closeWindowPlan')">
          <div class="part-of-exit" style="transform: rotate(45deg)"></div>
          <div class="part-of-exit" style="transform: rotate(-45deg)"></div>
        </div>
      </div>
      <div class="wrapper-for-container-drag-and-drop">
        <tmContainerForDragAndDrop id="bord-1">
          <tmCardForDragAndDrop
              v-for="(card,index) in TASKS"
              :key="index"
              :card="card"
              :id="`card-${index+1}`"/>
        </tmContainerForDragAndDrop>
        <tmContainerForDragAndDrop id="bord-2">
        </tmContainerForDragAndDrop>
      </div>
      <div style="display: flex;justify-content: center">
        <div class="save-edits" @click="$emit('closeWindowPlan')">
          <svg style="margin-right: 4px" width="12" height="12" viewBox="0 0 12 12" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path
                  d="M0.193334 4.19333L4.19333 0.193333C4.25477 0.133366 4.3272 0.0858287 4.40667 0.0533333C4.48932 0.0197446 4.57746 0.00166539 4.66667 0H10C10.5304 0 11.0391 0.210714 11.4142 0.585787C11.7893 0.960859 12 1.46957 12 2V10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12H2C1.46957 12 0.960858 11.7893 0.585786 11.4142C0.210713 11.0391 0 10.5304 0 10V4.66667C-0.000507355 4.57893 0.0163088 4.49195 0.0494852 4.41073C0.0826616 4.3295 0.131546 4.25563 0.193334 4.19333ZM8 1.33333H5.33333V2.66667H8V1.33333ZM4 10.6667H8V8.66667C8 8.48986 7.92976 8.32029 7.80474 8.19526C7.67971 8.07024 7.51014 8 7.33333 8H4.66667C4.48986 8 4.32029 8.07024 4.19526 8.19526C4.07024 8.32029 4 8.48986 4 8.66667V10.6667ZM1.33333 10C1.33333 10.1768 1.40357 10.3464 1.52859 10.4714C1.65362 10.5964 1.82319 10.6667 2 10.6667H2.66667V8.66667C2.66667 8.13623 2.87738 7.62753 3.25245 7.25245C3.62753 6.87738 4.13623 6.66667 4.66667 6.66667H7.33333C7.86377 6.66667 8.37247 6.87738 8.74755 7.25245C9.12262 7.62753 9.33333 8.13623 9.33333 8.66667V10.6667H10C10.1768 10.6667 10.3464 10.5964 10.4714 10.4714C10.5964 10.3464 10.6667 10.1768 10.6667 10V2C10.6667 1.82319 10.5964 1.65362 10.4714 1.5286C10.3464 1.40357 10.1768 1.33333 10 1.33333H9.33333V3.33333C9.33333 3.51014 9.2631 3.67971 9.13807 3.80474C9.01305 3.92976 8.84348 4 8.66667 4H4.66667C4.48986 4 4.32029 3.92976 4.19526 3.80474C4.07024 3.67971 4 3.51014 4 3.33333V2.27333L1.33333 4.94V10Z"
                  fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="12" height="12" fill="white" transform="matrix(-1 0 0 1 12 0)"/>
              </clipPath>
            </defs>
          </svg>
          <span style="color: #FCFCFD">Сохранить</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tmContainerForDragAndDrop from "./tm-container-for-drag-and-drop";
import tmCardForDragAndDrop from "./tm-card-for-drag-and-drop";
import {mapGetters} from 'vuex'

export default {
name: "modal-window-day-plan",
  components: {
    tmContainerForDragAndDrop,
    tmCardForDragAndDrop
  },
  computed: {
    ...mapGetters([
      'TASKS'
    ])
  }
}
</script>

<style>
.wrapper-for-container-drag-and-drop {
  display: flex;
  justify-content: space-between;
}
</style>