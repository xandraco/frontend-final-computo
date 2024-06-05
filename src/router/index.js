import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import PrincipalComponent from '@/components/principal-component.vue'
import CitasComponent from '@/components/citas-component.vue'
import PacientesComponent from '@/components/pacientes-component.vue'
import OrdenesComponent from '@/components/ordenes-component.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'principal',
          component: PrincipalComponent
        },
        {
          path: 'citas',
          component: CitasComponent
        },
        {
          path: 'pacientes',
          component: PacientesComponent
        },
        {
          path: 'ordenes',
          component: OrdenesComponent
        },
        {
          path: '',
          component: PrincipalComponent
        }
      ]
    }
  ]
})

export default router
