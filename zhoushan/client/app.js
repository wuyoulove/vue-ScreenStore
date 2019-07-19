import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import iView from 'tiview'
import TFetch from 'tfetch'
import echarts from 'echarts'
import RSS from './assets/js/resetSize'
import CUP from './assets/js/countUp'
import 'tiview/dist/styles/iview.css'

Vue.use(iView)
sync(store, router)
Vue.filter('NumFormat', function(value) {
  let intPart = Number(value).toFixed(0);
  let intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  return intPartFormat;
})

const app = new Vue({
  router,
  store,
  ...App,
  mounted: function() {
		RSS()
  }
})

const http = new TFetch({
  baseUrl: '/api',
  conf: {
    credentials: 'include'
  },
  after: [(rst) => {
    rst.json()
      .then(rsp => {
        // 拦截器
      })
  }],
  timeout: 5000
})

Vue.prototype.http = http
Vue.prototype.$echarts = echarts
export { app, router, store, http }
