import { createStore } from 'vuex'
import moment from 'moment'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import router from '../router/index'

export default createStore({
  state() {
    return {
      isModalVisible: false,
      isAddButtonVisible: false,
      isUpdateButtonVisible: false,
      isAlertModalVisible: false,
      invoices: [],
      newInvoice: {
        from: { name: '', email: '' },
        to: { name: '', email: '', address: '', city: '', zipcode: '', state: '', },
        status: 'Pending',
        items: [],
        date: moment().format('LL')
      },
      user: null
    }
  },
  mutations: {
    addUser(state, payload) {
      state.user = payload
    },
    clearUser(state) {
      state.user = null
    },
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
    toggleModal(state) {
      state.isModalVisible = !state.isModalVisible
    },
    TOGGLE_ALERT_MODAL(state) {
      state.isAlertModalVisible = !state.isAlertModalVisible
    },
    ADD_USER(state, payload) {
      state.user.push(payload)
    }
  },
  getters: { 
    invoicesCount(state) {
      return state.invoices.length
    }
  },
  actions: {
    async signUp({ commit }, payload) {
      const { email, password } = payload
      await createUserWithEmailAndPassword(auth, email, password)
      commit('addUser', auth.currentUser)
    },
    async signIn({ commit }, payload) {
      const { email, password } = payload
      await signInWithEmailAndPassword(auth, email, password)
      commit('addUser', auth.currentUser)
      router.push({ name: 'Home'})
    },
    async signOut({ commit }) {
      await signOut(auth)
      commit('clearUser')
      router.push({ name: 'Auth' })
    }
  },
  modules: {
  }
})