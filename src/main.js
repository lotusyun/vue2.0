import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
}) */

const Vueapp = Vue.extend(App)
new Vueapp({
  el: '#app',
  router
})
