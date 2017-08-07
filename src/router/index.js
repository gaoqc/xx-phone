import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

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
          component: r => require.ensure([], () => r(require('../pages/home')), 'home')
        },
        {
          path: '/custInfo',
          name: 'custInfo',
          component: r => require.ensure([], () => r(require('../pages/custInfo')), 'custInfo')
        }
      ]
    }
  ]
})
