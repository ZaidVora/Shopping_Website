import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import router from './routes';
import './assets/styles.css';


createApp(App).use(router).mount('#app')
