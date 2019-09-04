import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'

import Login from '@/components/Login'
import Home from '@/components/Home'
import Default from '@/components/Default'
import Order from '@/components/order/Order'
import Picture from '@/components/picture/Picture'
import Product from '@/components/product/Product'
import Broker from '@/components/broker/Broker'
import Config from '@/components/config/Config'

import Test from '@/components/Test'

Vue.use(Router)
Vue.use(ElementUI)


export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', name: 'Login', component: Login,meta:{title:'登陆'}},
    {
      path: '/home', component: Home,
      children: [
        {path: '/', name: 'Default', component: Default,meta:{title:'首页'}},
        {path: '/order', name: 'Order', component: Order,meta:{title:'订单'}},
        {path: '/picture', name: 'Picture', component: Picture,meta:{title:'图册'}},
        {path: '/product', name: 'Product', component: Product,meta:{title:'图册'}},
        {path: '/broker', name: 'Broker', component: Broker,meta:{title:'经销商'}},
        {path: '/test', name: 'Test', component: Test,meta:{title:'调试'}},
        {path: '/config', name: 'Config', component: Config,meta:{title:'配置'}}
      ]
    },
  ]
})
