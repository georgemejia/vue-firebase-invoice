import { createStore } from 'vuex'

export default createStore({
  state: {
    invoices: 0
  },
  mutations: {
    addNewInvoice(state) {
      state.invoices++
      console.log('New invoice has been created')
    } 
  },
  actions: {
  },
  modules: {
  }
})