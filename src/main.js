import "babel-polyfill"
import 'lib-flexible/flexible.js'
import VueRouter from 'vue-router'
import router from "./router"
import http from "./utils/axios"
import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
window.mode = true;
Vue.use(Vant)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$http = http;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
