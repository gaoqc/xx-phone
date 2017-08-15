/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 */

let baseUrl = 'http://127.0.0.1:8088/v1'
let routerMode = 'history'
let imgBaseUrl = 'http://images.cangdu.org/'

if (process.env.NODE_ENV === 'development') {
} else if (process.env.NODE_ENV === 'production') {
  // baseUrl = 'http://cangdu.org:8001';
}

export { baseUrl, routerMode, imgBaseUrl }
