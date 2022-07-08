import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import svgIcon from './components/icons/svgIcon'
import './assets/tailwind.css'

const app = createApp(App)
app.component('svg-icon', svgIcon)
app.use(store).use(router).mount('#app')
