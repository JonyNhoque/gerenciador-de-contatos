import App from './App.vue';
import { createApp } from 'vue';
import router from "./router";

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark',
  }
  }
});
app.mount('#app')
