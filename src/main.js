import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import './assets/_index.scss'; 
import components from '@/components/UI'

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp(App);
components.forEach(component => {
    app.component(component.name, component);
})
app.use(router);

app.mount('#app')
