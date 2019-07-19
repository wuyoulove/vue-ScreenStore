import Vue from 'vue'
import Router from 'vue-router'
import zongzhi from '../views/zongzhi/index.vue'
import fengxian from '../views/fengxian/index.vue'
import wangge from '../views/wangge/index.vue'
import cerebrum from '../views/cerebrum/index.vue'
import visual from '../views/visual/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: zongzhi
    }, {
      path: '/zongzhi',
      component: zongzhi
    }, {
      path: '/fengxian',
      component: fengxian
    }, {
      path: '/wangge',
      component: wangge
    }, {
      path: '/cerebrum',
      component: cerebrum
    }, {
      path: '/visual',
      component: visual
    }
  ]
})
