<template>
  <Dialog v-model:visible="openDialog">
    {{ msgDialog }}
  </Dialog>

  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h3 class="text-center mb-4">Login</h3>

            <form @submit.prevent="login" class="d-flex flex-column align-items-center">
              <div class="mb-3 d-flex flex-column align-items-center">
                <label for="username" class="form-label">Usuário</label>
                <InputText v-model="username" id="username" placeholder="Digite seu nome de usuário" class="form-control mb-3" style="max-width: 244px;"/>
                
                <label for="password" class="form-label">Senha</label>
                <Password v-model="password" id="password" placeholder="Digite sua senha" class="form-control border-0 px-0"/>
              </div>
                
              <div class="d-grid gap-2">
                <Button label="Entrar" class="p-button p-button-primary" type="submit" />
              </div>
            </form>

            <div class="text-center mt-3">
              <p>Não tem uma conta? <a href="#" @click.prevent="goToRegister">Cadastrar</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { useRouter } from 'vue-router';

export default {
  name: 'AuthView',
  components: {
    InputText,
    Password,
    Button,
    Dialog
  },
  setup() {
    const username = ref('');
    const password = ref('');
    const openDialog = ref(false);
    const msgDialog = ref('');

    const router = useRouter();

    const login = async () => {
      try {
        const response = await axios.post('http://localhost:3000/auth/login', {
          username: username.value,
          password: password.value
        });
        if (response.data) {
          /* openDialog.value = true;
          msgDialog.value = 'Autenticação bem sucedida.'; */
          router.push('/contatos');
        } else {
          openDialog.value = true;
          msgDialog.value = 'Usuário não encontrado ou credenciais inválidas';
        }
      } catch (error) {
        console.error('Erro de autenticação:', error.response?.data || error);
      }
    };

    const goToRegister = () => {
      router.push('/register');
    };

    return {
      username,
      password,
      openDialog,
      msgDialog,
      router,
      login,
      goToRegister
    };
  }
}
</script>

<style scoped>
.card {
  border-radius: 10px;
}

.p-password-input {
  width: 100% !important;
}
</style>
