import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);
//数据
const state = {
  tasteType: '', //秘钥类型
  APPid: 'wx39cd59d2e067bfd8',     //
  AppSecret: '9e15b275e3aef97a1ee8565cd4edffad',     //
  code: '',  //登录凭证
  token: '',
  userId: '',
  timer: '0',
  canIUse: true,
  family: { studentId: '', parentId: '', studentName: '' /*addisFull: ''*/ },
}

//获取数据（或者说是自定义过滤计算）
const getters = {
  getTasteType: state => state.tasteType,
  getAPPid: state => state.APPid,
  getAppSecret: state => state.AppSecret,
  getCode: state => state.code,
  gettoKen: state => state.token,
  getuserId: state => state.userId,
  gettimer: state => state.timer,
  getcanIUse: state => state.canIUse,
  getFamily: state => state.family
}

//提交方法
const mutations = {
  //清空方法
  clearStore(state) {
    if (state) {
      state.tasteType = ''
      state.code = ''
      state.token = ''
      state.userId = ''
      state.canIUse = ''
      state.timer = ''
    }
  },
  tasteType(state, value) {
    state.tasteType = value;
  },
  code(state, value) {
    state.code = value;
  },
  token(state, value) {
    state.token = value;
  },
  userId(state, value) {
    state.userId = value;
  },
  timer(state, value) {
    state.timer = value;
  },
  canIUse(state, value) {
    state.canIUse = value;
  },
  family(state, obj) {
    obj.forEach((item) => {
      Vue.set(state.family, item.key, item.value);
    })
  },

};

//提交拦截
const actions = {
  //清空方法
  setClearStore(state) {
    state.commit('clearStore');
  },
  setTasteType(state, value) {
    state.commit('tasteType', value);
  },
  setAPPid(state, value) {
    state.commit('APPid', value);
  },
  setAppSecret(state, value) {
    state.commit('AppSecret', value);
  },
  setToKen(state, value) {
    state.commit('token', value)
  },
  setUserId(state, value) {
    state.commit('userId', value)
  },
  setTimer(state, value) {
    state.commit('timer', value)
  },
  setCanIUse(state, value) {
    state.commit('canIUse', value)
  },
  setFamily(state, obj) {
    state.commit("family", obj);
  },

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  plugins: [createPersistedState({
    storage: {
      getItem: key => wx.getStorageSync(key),
      setItem: (key, value) => wx.setStorageSync(key, value),
      removeItem: key => { }
    }
  })],
  mutations,
  // plugins: [vuexLocal.plugin]
})

// export default Store
