import { createRouter, createWebHistory } from 'vue-router';
import AuthView from './auth/AuthView.vue';
import RegisterView from './auth/RegisterView.vue';
import ContatosView from './contatos/ContatosView.vue';
import ContatosRegister from './contatos/ContatosRegister.vue';

const routes = [
  { path: '/', component: AuthView },
  { path: '/register', component: RegisterView },
  { path: '/contatos', component: ContatosView },
  { path: '/contatos/edit', component: ContatosRegister },
  { path: '/contatos/:id/edit', component: ContatosRegister },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
