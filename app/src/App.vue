<template>
  <div>
    <Cabecalho/>
    <br/>
    <v-card color="#333333">
    <router-view/>
  </v-card>
    
  </div>
    
</template>

<script>
import Cabecalho from './components/Cabecalho.vue';

export default {
  name: 'App',
  components: {
    Cabecalho,
  }
};
</script>
