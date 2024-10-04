<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h2>{{ isEditing ? 'Editar Contato' : 'Cadastrar Contato' }}</h2>
        <p>{{ isEditing ? 'Edite as informações do contato.' : 'Cadastre um novo contato.' }}</p>
      </div>

      <div class="card-body">
        <form @submit.prevent="salvarContato">
          <div class="field mb-3">
            <label for="nome" class="form-label">Nome</label>
            <InputText 
              v-model="contato.nome" 
              id="nome" 
              placeholder="Nome" 
              required 
            />
          </div>

          <div class="field mb-3">
            <label for="email" class="form-label">Email</label>
            <InputText 
              v-model="contato.email" 
              id="email" 
              placeholder="Email" 
              type="email" 
              required 
            />
          </div>

          <div class="field mb-3">
            <label for="endereco" class="form-label">Endereço</label>
            <InputText 
              v-model="contato.endereco" 
              id="endereco" 
              placeholder="Endereço" 
              required 
            />
          </div>

          <div class="field mb-3">
            <label for="telefone" class="form-label">Telefone</label>
            <InputText 
              v-model="contato.telefone" 
              id="telefone" 
              placeholder="Telefone" 
              required 
            />
          </div>

          <div class="field mt-3">
            <Button 
              type="submit" 
              label="Salvar" 
              icon="pi pi-check" 
              class="p-button-primary me-2 mb-2" 
            />
            <Button 
              type="button" 
              label="Cancelar" 
              icon="pi pi-times" 
              class="p-button-secondary" 
              @click="voltar()" 
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  name: 'ContatoForm',
  components: {
    InputText,
    Button
  },
  props: {
    contatoId: {
      type: String,
      default: null
    }
  },
  mounted(){
    this.isEdit()
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();

    const isEditing = ref(false);
    const id = ref();

    const contato = ref({
      nome: '',
      email: '',
      endereco: '',
      telefone: ''
    });

    async function isEdit() {
      id.value = route.params.id;
      
      if (id.value) {
        isEditing.value = true;
        carregarContato(id.value);
      }
    }


    async function carregarContato(id) {
      try {
        const response = await axios.get(`http://localhost:3000/contatos/${id}`);
        contato.value = response.data;
        isEditing.value = true;
      } catch (error) {
        console.error(error);
      }
    }

    async function salvarContato() {
      try {
        if (isEditing.value) {
          await axios.put(`http://localhost:3000/contatos/${id.value}`, contato.value);
        } else {
          await axios.post('http://localhost:3000/contatos', contato.value);
        }
        voltar();
      } catch (error) {
        console.error(error);
      }
    }

    function voltar() {
      router.push('/contatos'); 
    }

    if (props.contatoId) {
      carregarContato(props.contatoId);
    }

    return {
      contato,
      isEditing,
      isEdit,
      id,
      router,
      salvarContato,
      voltar
    };
  }
};
</script>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
}

.field label {
  margin-bottom: 0.5rem;
}

.field .p-inputtext {
  width: 100%;
}
</style>
