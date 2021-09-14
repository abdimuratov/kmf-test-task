import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Registration from '../views/Registration.vue'
import Search from '../views/Search.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  }
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
