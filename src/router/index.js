import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Kites from '../views/Kites.vue'
import Checkout from '../views/Checkout.vue'
import CheckoutContactForm from '../views/CheckoutContactForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/kites',
    name: 'kites',
    component: Kites
  },
  {
    path: '/kassa',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/formular',
    name: 'checkoutForm',
    component: CheckoutContactForm
  },
  {
    path: '/',
    name: 'dit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
