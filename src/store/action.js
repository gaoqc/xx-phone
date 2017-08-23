export default {
  getUserInfo () {

  },
  appInfo ({commit, state}, appTyeId, vendor, fixMsg) {
    commit('APP_INFO', appTyeId, vendor, fixMsg)
  }
//   updateFixMsg({commit, state}, fixMsg){

//   }
}
