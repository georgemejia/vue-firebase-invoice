import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      isModalVisible: false,
      invoices: []
    }
  },
  mutations: {
    showModal(state) {
      state.isModalVisible = true
    },
    closeModal(state) {
      state.isModalVisible = false
    },
    addInvoiceToList(state, payload) {
      state.invoices.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})