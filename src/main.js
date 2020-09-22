import Vue from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import Vuelidate from 'vuelidate'
import router from './router/router'
import axios from 'axios'
import store from './vuex/store'
Vue.prototype.$axios = axios;
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
