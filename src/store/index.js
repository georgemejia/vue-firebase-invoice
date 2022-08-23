import { createStore } from 'vuex'
import moment from 'moment'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore"
import router from '../router/index'

export default createStore({
  state() {
    return {
      isFormOpen: false,
      isAddButtonVisible: false,
      isUpdateButtonVisible: false,
      isAlertModalVisible: false,
      invoiceType: 'All',
      invoices: [],
      invoice: {
        fromName: '',
        fromEmail: '',
        toName: '',
        toEmail: '',
        toAddress: '',
        toCity: '',
        toZipcode: '',
        toState: '',
        status: 'Pending',
        items: [],
        date: moment().format('LL')
      },
      user: null
    }
  },
  mutations: {
    toggleForm(state) {
      state.isFormOpen = !state.isFormOpen
    },
    addUser(state, payload) {
      state.user = payload
    },
    clearUser(state) {
      state.user = null
    },
    FILL_INVOICE_FORM(state, payload) {
      state.invoice = payload
    },
    renderInvoices(state, payload) {
      state.invoices = payload
    },
    clearInvoice(state) {
      state.invoice = {
        fromName: '',
        fromEmail: '',
        toName: '',
        toEmail: '',
        toAddress: '',
        toCity: '',
        toZipcode: '',
        toState: '',
        status: 'Pending',
        items: [],
        date: moment().format('LL')
      }
    },
    TOGGLE_ALERT_MODAL(state) {
      state.isAlertModalVisible = !state.isAlertModalVisible
    },
    ADD_USER(state, payload) {
      state.user.push(payload)
    },
    clearInvoices(state) {
      state.invoices = []
    },
    changeInvoiceType(state, payload) {
      state.invoiceType = payload
    }
  },
  getters: { 
    invoicesCount(state) {
      return state.invoices.length
    },
    paidInvoices(state) {
      return state.invoices.filter((invoice) => invoice.status === 'Paid')
    },
    pendingInvoices(state) {
      return state.invoices.filter((invoice) => invoice.status === 'Pending')
    }
  },
  actions: {
    async signUp({ commit }, payload) {
      const { email, password } = payload
      await createUserWithEmailAndPassword(auth, email, password)
      commit('addUser', auth.currentUser)
      router.push({ name: 'Home' })
    },
    async signIn({ commit }, payload) {
      const { email, password } = payload
      await signInWithEmailAndPassword(auth, email, password)
      commit('addUser', auth.currentUser)
      router.push({ name: 'Home' })
    },
    async signOut({ commit }) {
      await signOut(auth)
      commit('clearUser')
      router.push({ name: 'Auth' })
    },
    async addInvoiceToFirestoreCollection({ commit, state }) {
      await addDoc(collection(db, 'invoices'), state.invoice)
    },
    renderFirestoreCollection({ commit }) {
      onSnapshot(collection(db, 'invoices'), (querySnapshot) => {
        let invoices = []
        querySnapshot.forEach((doc) => {
          const invoiceId = { id: doc.id }
          invoices.push({ ...doc.data(), ...invoiceId })
        })
        commit('renderInvoices', invoices)
      })
    },
    async deleteInvoiceFromFirestoreCollection({ commit }, payload) {
      await deleteDoc(doc(db, 'invoices', payload))
    },
    async markInvoiceAsPaid({ commit }, payload) {
      await updateDoc(doc(db, 'invoices', payload), {
        status: 'Paid'
      })
    },
    async updateInvoice({ commit, state }, payload) {
      await updateDoc(doc(db, 'invoices', payload), state.invoice)
      commit('clearInvoice') 
    },
  },
  modules: {
  }
})