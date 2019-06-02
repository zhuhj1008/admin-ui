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


import Test from '@/components/Test'


Vue.use(Router)
Vue.use(ElementUI)


export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', name: 'Login', component: Login},
    {
      path: '/home', component: Home,
      children: [
        {path: '/', name: 'Default', component: Default},
        {path: '/order', name: 'Order', component: Order},
        {path: '/picture', name: 'Picture', component: Picture},
        {path: '/product', name: 'Product', component: Product},
        {path: '/broker', name: 'Broker', component: Broker},
        {path: '/test', name: 'Test', component: Test}
      ]
    },
  ]
})
