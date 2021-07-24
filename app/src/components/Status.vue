<template>
  <v-card :class="this.estado()" min-height="90px">
    <h2>{{texto}}</h2>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  data: function(){
    return{
      texto : `${this.nome} ainda não inciou as atividades.`
    }
  },
  props: {
    nome: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getEstado", "getTextoStatus"]),
  },
  methods: {
    ...mapMutations(["selecionarPessoa"]),
    estado() {
      this.$store.commit("selecionarPessoa", this.nome);
      this.texto = this.getTextoStatus
      return this.getEstado
    },
  },
};
</script>

<style>
.livre {
  background-color: green !important;
}
.estudando {
  background-color: deeppink !important;
}
.trabalhando {
  background-color: blue !important;
}
h2{
  text-align: center;
}
</style>