import './assets/style.css'; 

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import MyButton from '@/components/UI/MyButton.vue';

const app = createApp(App);

// Глобальная регистрация компонента
app.component('MyButton', MyButton);

app.use(router);

app.mount('#app')
