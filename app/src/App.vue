<template>
  <div>
    <Cabecalho/>
    <br/>
    <PaginaPrincipal/>
        <router-view/>

    
  </div>
    
</template>

<script>
import Cabecalho from './components/Cabecalho.vue';
import PaginaPrincipal from './paginas/PaginaPrincipal.vue'
export default {
  name: 'App',
  components: {
    Cabecalho,
    PaginaPrincipal,
  },

  data: () => ({
    //
  }),
};
</script>
