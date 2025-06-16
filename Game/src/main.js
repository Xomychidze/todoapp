import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

if (Window.Telegram?.Webapp){
    window.Telegram.Webapp.ready();
    window.Telegram.Webapp.expand();
}
app.use(router)

app.mount('#app')
