import './bootstrap'

import Vue from 'vue'
import router from './router'
import globalStore from './store'
import App from './App.vue'

import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

Vue.prototype.$store = globalStore();

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
