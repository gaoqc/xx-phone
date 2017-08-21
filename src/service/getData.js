import fetch from '../config/fetch'

/**
 * 提交
 */
export const postCustInfo = (name, phone, address) => fetch('/cust/addOrder', {name: name, phone: phone, address: address}, 'POST')
export const qryAllHomeAppliances = (type) => fetch('/product/qryAllHomeAppliances', {type: type})
export const getcaptchas = () => fetch('/user/getcaptchas')
export const accountLogin = (loginAcc, loginPwd, codeNum) => fetch('/user/login', {loginAcc: loginAcc, loginPwd: loginPwd, codeNum: codeNum})
export const qryUserAddress = () => fetch('/userAddress/list')
