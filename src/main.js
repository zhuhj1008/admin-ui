
import Vue from 'vue'
import App from './App'
import router from './plugins/router.js'
import store from './plugins/store.js'
// import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
import {post} from './plugins/http.js'


Vue.config.productionTip = false
Vue.prototype.$post=post;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
