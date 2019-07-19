import Vue from 'vue'
import Vuex from 'vuex'

// 导入各个模块
// 模块通常以页面为维度组织
// 公用数据可以单独放在一个公用模块中
import page from './modules/page'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,

  // 将模块添加到store
  modules: {
    page,
  }
})

export default store
