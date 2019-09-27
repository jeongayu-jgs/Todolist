import axios from '@/plugins/axios'

const todo = {
  namespaced: true,
  state: {
    list: null
  },
  getters: {
    list: (state) => state.list
  },
  mutations: {
    SET_LIST: (state, payload) => {
      state.list = Object.freeze(payload)
    }
  },
  actions: {
    async TODO_CREATE({commit}, payload) {
      try {
        await axios.post('/todo/create', payload)
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    async TODO_DELETE({commit}, payload) {
      try {
        await axios.post('/todo/delete', payload)
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
}

export default todo
