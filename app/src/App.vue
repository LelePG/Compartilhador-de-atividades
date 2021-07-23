<template>
  <div>
    <Cabecalho/>
    <br/>
    <Corpo/>
    
  </div>
    
</template>

<script>
import Cabecalho from './components/Cabecalho.vue';
import Corpo from './components/Corpo.vue'
export default {
  name: 'App',
  components: {
    Cabecalho,
    Corpo
  },

  data: () => ({
    //
  }),
};
</script>
