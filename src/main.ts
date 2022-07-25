import { router } from './routers'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'
import { client } from './utils/graphql'
import { i18n } from './utils/i18n'
import components from "./components/UI/"
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(client)
app.use(router)
app.use(i18n)
app.mount('#app')

components.forEach(component => {
    app.component(component.name, component);
})
