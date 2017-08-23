import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'
Vue.use(Vuex)

const state = {
  appTypeId: '', // 家电ID
  vendorId: '', // 厂商
  fixMsg: '', // 描述
  addrId: ''
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})
