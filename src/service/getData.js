import fetch from '../config/fetch'

/**
 * 提交
 */
export const postCustInfo = (name, phone, address) => fetch('/cust/addOrder', {name: name, phone: phone, address: address}, 'POST')
export const qryAllHomeAppliances = (type) => fetch('/product/qryAllHomeAppliances', {type: type})
export const getcaptchas = () => fetch('/user/getcaptchas')
export const accountLogin = (loginAcc, loginPwd, codeNum) => fetch('/user/login', {loginAcc: loginAcc, loginPwd: loginPwd, codeNum: codeNum})
export const qryUserAddress = () => fetch('/userAddress/list')
export const qryAddr = (addrId) => fetch('/userAddress/qryAddr', {addrId: addrId})
export const qryVendor = (vendorId) => fetch('/vendor/qryVendor', {vendorId: vendorId})
export const qryHomeAppKind = (kindId) => fetch('/product/qryHomeAppKind', {kindId: kindId})
export const createOrder = (appTypeId, vendorId, fixMsg, addrId) => fetch('/cust/addOrder', {appTypeId: appTypeId, vendorId: vendorId, fixMsg: fixMsg, addrId: addrId}, 'post')
export const qryOrderList = () => fetch('/cust/qryOrderList')
