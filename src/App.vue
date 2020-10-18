<template>
  <div id="app">
    <tmMainWrapper />
  </div>
</template>

<script>
import tmMainWrapper from './components/tm-main-wrapper'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    tmMainWrapper
  },
  methods: {
    ...mapActions([
        'AUTO_AUTH'
    ])
  },
  mounted() {
    this.AUTO_AUTH();
  }
}
</script>

<style>

</style>
