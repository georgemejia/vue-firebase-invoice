import { createStore } from 'vuex'
import moment from 'moment'

export default createStore({
  state() {
    return {
      isModalVisible: false,
      isAddButtonVisible: false,
      isUpdateButtonVisible: false,
      invoices: [],
      newInvoice: {
        from: { name: '', email: '' },
        to: { name: '', email: '', address: '', city: '', zipcode: '', state: '', },
        status: 'Pending',
        items: [],
        date: moment().format('LL')
      },
    }
  },
  mutations: {
    FILL_NEW_INVOICE_FORM(state, payload) {
      state.newInvoice = payload
    },
    ADD_NEW_INVOICE(state) {
      state.invoices.push(state.newInvoice)
      state.newInvoice = {
        from: { name: '', email: '' },
        to: { name: '', email: '', address: '', city: '', zipcode: '', state: '', },
        status: 'Pending',
        items: [],
        date: moment().format('LL')
      }
    },
    DELETE_INVOICE(state, payload) {
      state.invoices.splice(payload, 1)
    },
    UPDATE_INVOICE(state) {
      state.newInvoice = {
        from: { name: '', email: '' },
        to: { name: '', email: '', address: '', city: '', zipcode: '', state: '', },
        status: 'Pending',
        items: [],
        date: moment().format('LL')
      }
    },
    TOGGLE_MODAL(state) {
      state.isModalVisible = !state.isModalVisible
    },
  },
  actions: {
  },
  modules: {
  }
})