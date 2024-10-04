<template>
  <Dialog v-model:visible="openDialog">
    {{ msgDialog }}
  </Dialog>

  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h3 class="text-center mb-4">Cadastro</h3>

            <form @submit.prevent="register">
              <div class="mb-3">
                <label for="username" class="form-label">Usuário</label>
                <InputText v-model="username" id="username" placeholder="Digite seu nome de usuário" class="form-control"/>
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Senha</label>
                <Password v-model="password" id="password" placeholder="Digite sua senha" class="form-control border-0"/>
              </div>

              <div class="d-grid gap-2">
                <Button label="Cadastrar" class="p-button p-button-primary" type="submit" />
              </div>
            </form>

            <div class="text-center mt-3">
              <p>Já tem uma conta? <a href="#" @click.prevent="goToLogin">Entrar</a></p>
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
  name: 'RegisterView',
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

    const register = async () => {
      try {
        const response = await axios.post('http://localhost:3000/auth/register', {
          username: username.value,
          password: password.value
        });

        if(response) {
          openDialog.value = true;
          msgDialog.value = 'Cadastro bem-sucedido. Você pode fazer login agora!';
        }
      } catch (error) {
        console.error('Erro ao cadastrar:', error.response?.data || error);
        openDialog.value = true;
        msgDialog.value = 'Erro ao cadastrar. Tente novamente.';
      }
    };

    const goToLogin = () => {
      router.push('/')
    };

    return {
      username,
      password,
      openDialog,
      msgDialog,
      router,
      register,
      goToLogin
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
