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
                @click="editarContato(slotProps.data._id)"
                aria-label="Editar"
              />
              <Button 
                icon="pi pi-trash" 
                @click="deletarContato(slotProps.data._id)"
                aria-label="Excluir"
              />
            </template>
          </Column>
        </DataTable>

        <div class="d-flex justify-content-start mt-3">
          <Button label="Cadastrar contato" class="p-button p-button-primary" v-on:click="cadastrarContato()" />
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
import router from '@/router';

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

    async function cadastrarContato(){
      return router.push('contatos/edit')
    }

    async function editarContato(id){
      return router.push(`contatos/${id}/edit`)
    }

    async function deletarContato(id){
      try {
        const response = await axios.delete(`http://localhost:3000/contatos/${id}`)
        return contatos.value = response.data;
      } catch(error) {
        console.error(error)
      }
    }
    
    return {
      contatos,
      contatoSelecionado,
      getContatos,
      cadastrarContato,
      editarContato,
      deletarContato
    }
  }
}
</script>

<style>
</style>