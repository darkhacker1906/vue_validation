import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import store from './vuex/store'

const app = createApp(App)

registerPlugins(app)
app.use(router)
app.use(store)
app.mount('#app')
