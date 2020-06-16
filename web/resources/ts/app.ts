import Vue from 'vue'
import router from './router'
import App from './App.vue'

import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

new Vue({
  el: '#app',
  router, // ルーティングの定義を読み込む
  render: h => h(App),
})
