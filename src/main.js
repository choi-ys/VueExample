import Vue from 'vue'
import App from './App.vue';
import { router } from './router/index.js';
import { store } from './store/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router, // import한 router를 main.js에 연결
  store : store,  // import한 store를 main.js에 연결
}).$mount('#app')
