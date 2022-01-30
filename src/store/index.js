import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      isModalVisible: false,
      invoices: []
    }
  },
  mutations: {
    toggleModal(state) {
      state.isModalVisible = !state.isModalVisible
    },
    addInvoiceToList(state, payload) {
      state.invoices.push(payload)
    },
  },
  actions: {
  },
  modules: {
  }
})