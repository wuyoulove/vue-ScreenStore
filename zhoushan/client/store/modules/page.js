import { http } from '../../app'

// 定义action type
export const CREATE_PAGE = 'SAVE_PAGE'
export const GET_PAGE = 'GET_PAGE'
export const EDIT_PAGE = 'EDIT_PAGE'
export const DELETE_PAGE = 'DELETE_PAGE'

// 指定对应api
export const api = {
  [CREATE_PAGE]: '/pageInstanceManage/addPageInstance',
  [GET_PAGE]: '/pageInstanceManage/getPageInstanceById',
  [EDIT_PAGE]: '/pageInstanceManage/updatePageInstance',
  [DELETE_PAGE]: '/pageInstanceManage/deletePageInstanceById'
}

// 初始化store对象
const state = {
  page: {}
}

// 异步操作放到action handler里
const actions = {
  createPage ({ commit, state }, payload) {
    http.post(api[CREATE_PAGE], payload)
      .then(rst => {
        // 向vuex提交获取掉的数据
        commit(CREATE_PAGE, rst.data)
      }).catch(e => console.log(e, 'error'))
  },
  getPage ({ commit, state }, payload) {
    return http.get(api[GET_PAGE], { id: payload })
  },
  editPage ({ commit, state }, payload) {
    http.get([api[EDIT_PAGE]], payload)
      .then(rst => {
        commit(EDIT_PAGE, rst.data)
      }).catch(e => console.log(e, 'error'))
  },
  deletePage ({ commit, state }, payload) {
    return http.get(api[DELETE_PAGE], { id: payload })
  }
}

// 根据commit更新store
const mutations = {
  [CREATE_PAGE] (state, payload) {
    state.page = payload
  },
  [EDIT_PAGE] (state, payload) {
    state.page = payload
  }
}


const getters = {
  currentPage (state) {
    return state.page
  }
}

// 导出vuex模块
export default {
  // 模块开启命名空间
  namespaced: true,

  state,
  actions,
  mutations,
  getters
}
