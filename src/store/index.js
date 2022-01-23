import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      isModalVisible: false
    }
  },
  mutations: {
    showModal(state) {
      state.isModalVisible = true
    },
    closeModal(state) {
      state.isModalVisible = false
    }
  },
  actions: {
  },
  modules: {
  }
})