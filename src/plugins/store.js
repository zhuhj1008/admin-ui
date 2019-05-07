import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
	  currentUser:{
      userId:'',
      name:'',
	    phone:'15175225612',
      password:'',
      remember:true
    },
		order:{
			orderStatus:[
				{"id":"1","status":"新订单"},
				{"id":"2","status":"已付款"},
				{"id":"3","status":"已完成"}]
		}
	},
	mutations:{
		login:(state,form) => {
			state.currentUser.userId =  form.userId;
			state.currentUser.name =  form.name;
			state.currentUser.phone =  form.phone;
			state.currentUser.password =  form.password;
			state.currentUser.remember =  form.remember;
		}
	}
});


// const user = {
//   state: {
//     'name': 'Joe',
//     'phone': '15175225612',
//   },
//   mutations: {
//     setName: (state, name) => {
//       state.name = name;
//     }
//   },
// }
//
// const order = {
//   state: {
//     orderStatus: [
//       {"id": "1", "status": "新订单"},
//       {"id": "2", "status": "已付款"},
//       {"id": "3", "status": "已完成"}]
//
//   }
// }
//
// export default new Vuex.Store({
//   modules: {
//     user: user,
//     order: order
//   }
// });

