import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080";
const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(router).mount('#app');
