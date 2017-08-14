import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Router)
Vue.use(VueAxios, axios)
/** 首页 begin **/
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home')
const custInfo = r => require.ensure([], () => r(require('@/pages/home/custInfo/custInfo')), 'custInfo')
/** 首页 end  **/
/**  知识库 begin  **/
const newsIndex = r => require.ensure([], () => r(require('@/pages/news/news')), 'profile')
/**  知识库 end  **/
/**  订单 begin **/
const order = r => require.ensure([], () => r(require('@/pages/order/order')), 'order')
/**  订单 end  **/
/** 我的 begin  */
const profile = r => require.ensure([], () => r(require('@/pages/profile/profile')), 'profile')
/** 我的 end  */

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
