import fetch from '../config/fetch'

/**
 * 提交
 */
export const postCustInfo = (name, phone, address) => fetch('/cust/addOrder', {name: name, phone: phone, address: address}, 'POST')
export const qryAllHomeAppliances = (type) => fetch('/product/qryAllHomeAppliances', {type: type})
