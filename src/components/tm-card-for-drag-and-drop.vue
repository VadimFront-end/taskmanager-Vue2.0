<template>
  <div
      class="tm-card-for-drag-and-drop"
      draggable="true"
    :id="id"
    @dragstart="dragStart"
    @dragend="dragEnd">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tm-card-for-drag-and-drop",
  props: ['id'],
  methods: {
    dragStart(e) {
      const target=e.target;
      e.dataTransfer.setData('card_id', target.id);
      setTimeout(() => {
        target.style.display='none';
      }, 0);
    },
    dragEnd(e) {
      const target=e.target;
      e.dataTransfer.setData('card_id', target.id);
      setTimeout(() => {
        target.style.display='block';
      }, 0);
    }
  }
}
</script>

<style>
.tm-card-for-drag-and-drop {
 height: 20px;
}
</style>