<template>
  <div
      class="tm-container-for-drag-and-drop"
      :id="id"
      @dragover.prevent
      @drop.prevent="drop">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tm-container-for-drag-and-drop",
  props: ['id'],
  methods: {
    drop(e) {
      const card_id=e.dataTransfer.getData('card_id');
      const card=document.getElementById(card_id);
      e.target.appendChild(card);
    }
  }
}
</script>

<style>
  .tm-container-for-drag-and-drop {
    width: 30%;
    height: 50vh;
    background: #2CCF11;
    margin-right: 20px;
  }
</style>