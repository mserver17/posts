import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/_index.scss'; 
import './assets/_importer.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router';
import store from './store'; 
import directives from '@/components/directives';
import components from '@/components/UI';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp(App);
components.forEach(component => {
    app.component(component.name, component);
})
directives.forEach(directive => {
    app.directive(directive.name, directive)
});

app
    .use(router)
    .use(store)
    .mount('#app')
