import { createRouter, createWebHistory } from 'vue-router'
import PortfolioMainView from '../views/PortfolioMain.vue'

const routes = [
 
  {
    path: 'Portfolio',
    name: 'Portfolio',
    component: PortfolioMainView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
