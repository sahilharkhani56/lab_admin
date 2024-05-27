import './assets/main.css'
import '../css/common.css'
import '../css/style.css'
import '../css/swiper.min.css'
import '../js/script.js'
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
import router from './Router' // Assuming `router.js` is in the same directory

const app = createApp(App)
app.use(router) // Make router available throughout the application

app.mount('#app')