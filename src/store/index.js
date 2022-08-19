import { createStore } from 'vuex'
import moment from 'moment'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore"
import router from '../router/index'

export default createStore({
  state() {
    return {
      isModalVisible: false,
      isAddButtonVisible: false,
      isUpdateButtonVisible: false,
      isAlertModalVisible: false,
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
      // state.invoices.push(payload)
      // state.invoice = {}
      state.invoices = payload
    },
    DELETE_INVOICE(state, payload) {
      state.invoices.splice(payload, 1)
    },
    UPDATE_INVOICE(state) {
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
    toggleModal(state) {
      state.isModalVisible = !state.isModalVisible
    },
    TOGGLE_ALERT_MODAL(state) {
      state.isAlertModalVisible = !state.isAlertModalVisible
    },
    ADD_USER(state, payload) {
      state.user.push(payload)
    },
    clearInvoices(state) {
      state.invoices = []
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
    async addInvoiceToFirestoreCollection({ dispatch, state }) {
      await addDoc(collection(db, 'invoices'), state.invoice)
      // dispatch('renderFirestoreCollection')
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
  },
  modules: {
  }
})