import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      userId: '',
      name: '',
      phone: '15175225612',
      password: '',
      remember: true
    },
    order: {
      orderStatus: [
        // {"id": null, "status": "全部"},
        {"id": 1, "status": "新订单"},
        {"id": 2, "status": "已付款"},
        {"id": 3, "status": "已完成"}
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
    login: (state, form) => {
      state.currentUser.userId = form.userId;
      state.currentUser.name = form.name;
      state.currentUser.phone = form.phone;
      state.currentUser.password = form.password;
      state.currentUser.remember = form.remember;
    }
  }
});



