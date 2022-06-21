import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      isModalVisible: false,
      isModalVisibleEdit: false,
      invoices: [],
      editedInvoice: {}
    }
  },
  mutations: {
    toggleModal(state) {
      state.isModalVisible = !state.isModalVisible
    },
    toggleModalEdit(state) {
      state.isModalVisibleEdit = !state.isModalVisibleEdit
    },
    addInvoiceToList(state, payload) {
      state.invoices.push(payload)
    },
    deleteInvoice(state, payload) {
      state.invoices.splice(payload, 1)
    },
    editInvoice(state, payload) {
      const filteredInvoices = state.invoices.filter((element) => element === payload )
      const invoice = filteredInvoices.map((invoice) => invoice )
      state.editedInvoice = invoice[0]
      state.isModalVisibleEdit = !state.isModalVisibleEdit
    }
  },
  actions: {
  },
  modules: {
  }
})