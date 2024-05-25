import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Componentes
import loginCard from './components/interface/login-card.vue'

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

app.mount('#app')
