
import Vue from 'vue'
import App from './App'
import router from './plugins/router.js'
import store from './plugins/store.js'
import '../theme/index.css'
import {post} from './plugins/http.js'


Vue.config.productionTip = false
Vue.prototype.$post=post;

router.beforeEach((to, from, next) => {
  document.title=to.meta.title;//让页面显示路由对应的name值。
  next()
});

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})

