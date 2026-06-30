import { createApp } from 'vue'
import './index.css'
import './styles/fonts.css'
import './styles/base.css'
import App from './App.vue'
import { router } from './router'

createApp(App).use(router).mount('#app')
