import { createRouter, createWebHistory } from 'vue-router';
import AuthView from './auth/AuthView.vue';
import RegisterView from './auth/RegisterView.vue';
import ContatosView from './contatos/ContatosView.vue';

const routes = [
  { path: '/', component: AuthView },
  { path: '/register', component: RegisterView },
  { path: '/contatos', component: ContatosView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
