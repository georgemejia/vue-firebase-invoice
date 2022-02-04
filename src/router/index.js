import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue'
import Invoice from '../views/Invoice.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/invoice/:invoice',
    name: 'Invoice',
    component: Invoice,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router