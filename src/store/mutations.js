const GET_USER_INFO = 'get_user_info'
const APP_INFO = 'APP_INFO'
const updateFixMsg = 'updateFixMsg'
const updateAddrId = 'updateAddrId'
const updateAppTypeId = 'udpateAppTypeId'
const updateVendorId = 'updateVendorId'
export default{
  [GET_USER_INFO] () {

  },
  [APP_INFO] (state, appTypeId, vendor, fixMsg) {
    state.appTypeId = appTypeId
    state.vendor = vendor
    state.fixMsg = fixMsg
  },
  [updateFixMsg] (state, fixMsg) {
    state.fixMsg = fixMsg
  },
  [updateAddrId] (state, addrId) {
    state.addrId = addrId
  },
  [updateAppTypeId] (state, typeId) {
    state.appTypeId = typeId
  },
  [updateVendorId] (state, vendorId) {
    state.vendorId = vendorId
  }
}
