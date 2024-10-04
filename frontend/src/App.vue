<template>
  <div>
    <!-- <component :is="currentView" @register="showRegisterView" @goToLogin="showLoginView"/> -->
    <router-view @register="showRegisterView" />
  </div>
</template>

<script>
/* import AuthView from './auth/AuthView';
import RegisterView from './auth/RegisterView'; */

export default {
  name: 'App',
  components: {
   /*  AuthView,
    RegisterView */
  },
  data() {
    return {
      currentView: 'AuthView',
    };
  },
  methods: {
    showRegisterView() {
      this.currentView = 'RegisterView';
    },
    showLoginView() {
      this.currentView = 'AuthView';
    }
  }
}
</script>

<style>
</style>
