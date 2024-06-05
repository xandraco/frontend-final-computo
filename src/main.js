import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Componentes
import loginCard from './components/login-card.vue'
import sideBar from './components/side-bar.vue'
import principalComponent from './components/principal-component.vue'
import citasComponent from './components/citas-component.vue'
import pacientesComponent from './components/pacientes-component.vue'
import ordenesComponent from './components/ordenes-component.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)

app.use(vuetify)
app.use(router)

// uso de componentes
app.component('loginCard', loginCard)
app.component('sideBar', sideBar)
app.component('principalComponent', principalComponent)
app.component('citasComponent',citasComponent)
app.component('pacientesComponent', pacientesComponent)
app.component('ordenesComponent', ordenesComponent)

app.mount('#app')
