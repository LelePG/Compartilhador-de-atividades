<template>
  <v-card :class="this.estado()" min-height="90px">
    <h2>{{texto}}</h2>
    <p id = "textoEstado">{{this.getEstado}}</p>
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
.livre{
 background-color: #FF5C5C !important;
  color: #F6F6F6 !important; 
}
.estudando {
 background-color: #666666 !important;
  color: #F6F6F6 !important; 
}
.trabalhando {
  background-color: #B90504 !important;
  color: #F6F6F6 !important; 
}
h2{
  text-align: center;
}
p#textoEstado{
  margin-top:30px;
  text-align: center;
}
</style>