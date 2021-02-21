import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home/Home')
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import('../components/Books/Books')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../components/Cart/Cart'),
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
