import fetch from '../config/fetch'

/**
 * 提交
 */
// export const postCustInfo = (name, phone, address) => fetch('/user', {name: name, phone: phone, address: address})
export const postCustInfo = () => fetch('/user', {user_id: 'null'})
