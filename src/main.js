import Vue from 'vue'
import App from './App.vue';
import { router } from './router/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // import한 router를 main.js에 연결
  router: router
}).$mount('#app')
