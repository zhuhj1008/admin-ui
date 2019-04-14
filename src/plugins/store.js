import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// export default new Vuex.Store({
// 	state:{
// 		name:'Joe',
// 		order:{
// 			orderStatus:[
// 				{"id":"1","status":"新订单"},
// 				{"id":"2","status":"已付款"},
// 				{"id":"3","status":"已完成"}]
// 		}
// 	},
// 	mutations:{
// 		setName:(state,name) => {
// 			state.name =  name;
// 		}
// 	}
// });


const user = {
  state: { 
	'name':'Joeaa',
  },
  mutations: { 
	setName:(state,name) => {
		state.name =  name;
	}
  },
}

const order = {
	state: { 
		orderStatus:[
			{"id":"1","status":"新订单"},
			{"id":"2","status":"已付款"},
			{"id":"3","status":"已完成"}]
				
	}
}

export default new Vuex.Store({
  modules: {
    user: user,
    order: order
  }
});

