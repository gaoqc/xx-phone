import { baseUrl } from './env'
import Vue from 'vue'

export default async (url = '', data = {}, type = 'GET') => {
  type = type.toUpperCase()
  url = baseUrl + url
  // debugger
  // if (type === 'GET') {
  //   let dataStr = '' // 数据拼接字符串
  //   Object.keys(data).forEach(key => {
  //     dataStr += key + '=' + data[key] + '&'
  //   })

  //   if (dataStr !== '') {
  //     dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
  //     url = url + '?' + dataStr
  //   }
  // }
  // let requestConfig = {
  //   credentials: 'include',
  //   method: type,
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   mode: 'no-cors',
  //   cache: 'force-cache'
  // }
  return Vue.axios.request({
    url: url,
    method: type,
    params: data
  }).then(res => {
    data = res.data
    if (data === null) {
      throw new Error('res.data is emtpy!')
    }
    if (data.code !== '000000') {
      // 100003 表示未登录,需要跳转到登录页面
      if (data.code === '100003') {
        window.location.href = '/#/login'
      } else {
        throw new Error(data.msg)
      }
    }
    return data.data
  })
  // reture new Vue.$http.get(url, requestConfig)
  // if (window.fetch && method === 'fetch') {
  //   let requestConfig = {
  //     credentials: 'include',
  //     method: type,
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     mode: 'no-cors',
  //     cache: 'force-cache'
  //   }

  //   if (type === 'POST') {
  //     Object.defineProperty(requestConfig, 'body', {
  //       value: JSON.stringify(data)
  //     })
  //   }

  //   try {
  //     const response = await fetch(url, requestConfig)
  //     const responseJson = await response.json()
  //     return responseJson
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // } else {
  //   return new Promise((resolve, reject) => {
  //     let requestObj
  //     if (window.XMLHttpRequest) {
  //       requestObj = new XMLHttpRequest()
  //     } else {
  //       // requestObj = new ActiveXObject()
  //     }

  //     let sendData = ''
  //     if (type === 'POST') {
  //       sendData = JSON.stringify(data)
  //     }

  //     requestObj.open(type, url, true)
  //     requestObj.setRequestHeader(
  //       'Content-type',
  //       'application/x-www-form-urlencoded'
  //     )
  //     requestObj.send(sendData)

  //     requestObj.onreadystatechange = () => {
  //       if (requestObj.readyState === 4) {
  //         if (requestObj.status === 200) {
  //           let obj = requestObj.response
  //           if (typeof obj !== 'object') {
  //             obj = JSON.parse(obj)
  //           }
  //           resolve(obj)
  //         } else {
  //           reject(requestObj)
  //         }
  //       }
  //     }
  //   })
  // }
}
