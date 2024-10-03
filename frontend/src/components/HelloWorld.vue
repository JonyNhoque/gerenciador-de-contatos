<template>
  <h2>Lista de contatos cadastrados: </h2>
  <ul v-for="contato in contatos" v-bind:key="contato.id">
    <li>
      <h4>{{ contato.nome }}</h4>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  name: 'HelloWorld',
  mounted() {
    this.getContatos();
  },
  setup() {
    const contatos = ref([]);

    async function getContatos() {
      try {
        const response = await axios.get('http://localhost:3000/contatos');
        contatos.value = response.data;
        console.log(contatos.value)
        return contatos
      } catch(e) {
        console.error(e)
      }
    }

    return {
      getContatos,
      contatos
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
