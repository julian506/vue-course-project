import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

//axios
import axios from 'axios'
import vueAxios from 'vue-axios'

const app = createApp(App)

app.use(router)

app.use(vuetify)

app.use(vueAxios, axios)

app.mount('#app')
