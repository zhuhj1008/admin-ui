import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'

import Login from '@/components/Login'
import Home from '@/components/Home'
import Default from '@/components/Default'
import Order from '@/components/order/Order'
import Order2 from '@/components/order/Order2'
import EditOrder from '@/components/order/EditOrder'
import Picture from '@/components/picture/Picture'


Vue.use(Router)
Vue.use(ElementUI)


export default new Router({
	mode: 'history',
  routes: [
		{path: '/',redirect:'/login'},
		{path: '/login',name: 'Login',component: Login},
		{path: '/home',component: Home,
			children:[
				{path: '/',name: 'Default',component: Default},
				{path: '/order',name: 'Order',component: Order},
				{path: '/order2',name: 'Order2',component: Order2},
				{path: '/picture',name: 'Picture',component: Picture}
			]
		},
  ]
})
