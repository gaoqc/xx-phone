import fetch from '../config/fetch'

/**
 * 提交
 */
// export const postCustInfo = (name, phone, address) => fetch('/user', {name: name, phone: phone, address: address})
export const postCustInfo = () => fetch('/cust/add', {user_id: 'null'})
