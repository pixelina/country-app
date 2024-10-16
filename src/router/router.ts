/* eslint-disable no-undef */
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CountryPage from '@/pages/CountryPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/country/:countryCode',
    component: CountryPage,
    meta: { auth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
