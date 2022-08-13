import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import { auth } from '../firebase'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!auth.currentUser) {
      next('/')
    } else {
        next()
    }
  } else {
    next()
  }
})

export default router