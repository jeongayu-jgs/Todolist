import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    user: (state) => state.user
  },
  mutations: {
    SET_USER: (state, payload)=> {
      state.user = payload
    }
  }
})

export default store