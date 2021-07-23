<template>
  <v-card :class="this.estado" min-height="90px">
    <h1>Insira o texto de teste aqui</h1>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getEstado", "getAll"]),
    estado: function () {
      this.$store.commit("selecionarPessoa", this.nome);
      return this.getEstado;
    },
  },
  methods: {
    ...mapMutations(["selecionarPessoa"]),
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
</style>