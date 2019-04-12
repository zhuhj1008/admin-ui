import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// const store = new Vuex.Store({
//     //state 相当于所有组件的data，用于保存公共数据
// 	state:{
// 		name:'Joe',
// 		order:{
// 			orderStatus:[
// 				{"id":"1","status":"新订单"},
// 				{"id":"2","status":"已付款"},
// 				{"id":"3","status":"已完成"}]
// 		}
// 	},
// 	//getters相当于所有组件的computed属性，用于获取state中值，或计算state中值，并将计算结果缓存下来
// 	//只有当state中属性值发生变化的时候，才会重新计算并缓存
// // 	getters: {
// // 		getName:(state) => {
// // 			return state.name;
// // 		}
// // 	},
// 	//mutations相当于store中的methods，可以接受参数操作state
// 	//mutations中方法只能用commit调用，例如 this.$store.commit('appendStr', 'aaa');
// 	mutations:{
// 		setName:(state,name) => {
// 			state.name =  name;
// 		}
// 	}
// 
// });




const moduleUser = {
	state:{
		name:'Joe'
	}
}

const moduleOrder ={
	state:{
		orderStatus:[
			{"id":"1","status":"新订单"},
			{"id":"2","status":"已付款"},
			{"id":"3","status":"已完成"}]
	}
}

const store = new Vuex.Store({
  modules: {
    user: moduleUser,
    order: moduleOrder
  }
})

export default {
	store
};