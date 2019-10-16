import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'

import Login from '@/components/Login'
import Home from '@/components/Home'

import Customer from '@/components/customer/Customer'
import User from '@/components/user/User'

import Order from '@/components/order/Order'
import Broker from '@/components/broker/Broker'

import Product from '@/components/product/Product'

import Charts from '@/components/charts/Charts'
import BrokerCharts from '@/components/charts/BrokerCharts'

import Config from '@/components/config/Config'


Vue.use(Router)
Vue.use(ElementUI)


export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', name: 'Login', component: Login, meta: {title: '登陆'}},
    {path: '/brokerCharts', name: 'brokerCharts', component: BrokerCharts, meta: {title: '登陆'}},
    {
      path: '/home', component: Home,
      children: [
        // {path: '/', name: 'Index', component: Index, meta: {title: '首页'}},

        {path: '/customer', name: 'Customer', component: Customer, meta: {title: '客户'}},
        {path: '/user', name: 'User', component: User, meta: {title: '系统用户'}},
        {path: '/order', name: 'Order', component: Order, meta: {title: '订单'}},
        {path: '/broker', name: 'Broker', component: Broker, meta: {title: '经销商'}},
        {path: '/product', name: 'Product', component: Product, meta: {title: '图册'}},
        /*{path: '/charts', name: 'Charts', component: Charts, meta: {title: '订单图表'}},*/
        {path: '/brokerCharts', name: 'BrokerCharts', target:"_blank",component: BrokerCharts, meta: {title: '经销商报表'}},
        {path: '/config', name: 'Config', component: Config, meta: {title: '配置'}}
      ]
    },
  ]
})
