import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    serverUrl: 'http://39.105.2.84:6060',
    currentUser: {
      userId: '',
      name: ''
    },
    order: {
      orderStatus: [
        {"id": 1, "status": "新订单"},
        {"id": 2, "status": "预付款"},
        {"id": 3, "status": "生产中"},
        {"id": 4, "status": "运输中"},
        {"id": 5, "status": "安装中"},
        {"id": 6, "status": "已完成"}
      ],
      orderType: [
        {"id": 1, "text": "实木复合门"},
        {"id": 2, "text": "工艺贴皮门"},
        {"id": 3, "text": "原木门"},
        {"id": 4, "text": "钢木门"}
      ]
    }
  },
  mutations: {
    setLocal(state,param){
      return localStorage.setItem(param.key,param.value);
    },
    getLocal(key){
      return localStorage.getItem(key);
    }
  }
});



