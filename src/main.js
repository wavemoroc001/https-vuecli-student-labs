import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
// createApp(App).mount('#app')

const app = createApp(App)
app.component('base-card', BaseCard)
app.component('base-butt0n',BaseButton)
app.mount('#app')
