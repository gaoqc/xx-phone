import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Router)
Vue.use(VueAxios, axios)
const home = r => require.ensure([], () => r(require('../pages/home')), 'home')
const custInfo = r => require.ensure([], () => r(require('../pages/custInfo')), 'custInfo')
const order = r => require.ensure([], () => r(require('../pages/order')), 'order')
const profile = r => require.ensure([], () => r(require('../pages/profile/profile')), 'profile')
const newsIndex = r => require.ensure([], () => r(require('../pages/news/news')), 'profile')
// const info = r => require.ensure([], () => r(require('../pages/profile/children/info')), 'info')
// const address = r => require.ensure([], () => r(require('../page/profile/children/children/address')), 'address')
// const add = r => require.ensure([], () => r(require('../page/profile/children/children/children/add')), 'add')
// const addDetail = r => require.ensure([], () => r(require('../page/profile/children/children/children/children/addDetail')), 'addDetail')
// const setusername = r => require.ensure([], () => r(require('../pages/profile/children/setusername')), 'setusername')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: App,
      children: [
        {
          path: '',
          name: 'home',
          component: home
        },
        {
          path: '/custInfo',
          name: 'custInfo',
          component: custInfo
        },
        {
          path: '/news',
          name: 'news',
          component: newsIndex
        },
        {
          path: '/order',
          name: 'order',
          component: order
        }, // 个人信息页
        {
          path: '/profile',
          component: profile
      //     children: [{
      //       path: 'info', // 个人信息详情页
      //       component: info
      //       children: [{
      //         path: 'address',
      //         component: address,     // 编辑地址
      //         children: [{
      //           path: 'add',
      //           component: add,
      //           children: [{
      //             path: 'addDetail',
      //             component: addDetail
      //           }]
      //         }]
      //       }]
      //     },
      //     {
      //       path: 'setusername',
      //       component: setusername
      //     }
      //     // {
      //     //   path: 'service', // 服务中心
      //     //   component: service
      //     // }
      //     ]
        }
      ]
    }
  ]
})
