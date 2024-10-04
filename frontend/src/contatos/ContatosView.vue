<template>
  <div class="container mt-5">
    <div class="card">

      <div class="card-header">
        <h2>Contatos</h2>
        <p>Gerencie seus contatos</p>
      </div>

      <div class="card-body">
        <DataTable 
          :value="contatos"
        >
          <Column field="nome" header="Nome"></Column>
          <Column field="email" header="Email"></Column>
          <Column field="endereco" header="Endereço"></Column>
          <Column field="telefone" header="Telefone"></Column>
          <Column header="Ações">
            <template #body="slotProps">
              <Button 
                icon="pi pi-pencil" 
                class="me-2"
                @click="editContato(slotProps.data)"
                aria-label="Editar"
              />
              <Button 
                icon="pi pi-trash" 
                @click="deleteContato(slotProps.data._id)"
                aria-label="Excluir"
              />
            </template>
          </Column>
        </DataTable>

        <div class="d-flex justify-content-start mt-3">
          <Button label="Cadastrar contato" class="p-button p-button-primary" v-on:click="cadastrarUsuario()" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

export default {
  name: 'ContatosView',
  components: {
    DataTable,
    Column,
    Button
  },
  mounted(){
    this.getContatos();
  },
  setup() {
    const contatos = ref([]);
    const contatoSelecionado = ref();

    async function getContatos(){
      try {
        const response = await axios.get('http://localhost:3000/contatos')
        return contatos.value = response.data;
      } catch(error) {
        console.error(error)
      }
    }

    async function cadastrarUsuario(){
      return
    }
    
    return {
      contatos,
      contatoSelecionado,
      getContatos,
      cadastrarUsuario
    }
  }
}
</script>

<style>
</style>