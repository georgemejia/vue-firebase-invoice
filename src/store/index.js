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
    deleteInvoice(state, payload) {
      state.invoices.splice(payload, 1)
    },
  },
  actions: {
  },
  modules: {
  }
})