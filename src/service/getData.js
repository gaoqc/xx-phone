import fetch from '../config/fetch'

/**
 * 提交
 */
export const postCustInfo = (name, phone, address) => fetch('/cust/add', {name: name, phone: phone, address: address})
