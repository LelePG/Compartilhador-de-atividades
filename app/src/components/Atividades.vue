<template>
  <v-card :class="`${nome}-atividades atividades`">
    <h1>{{ nome }}</h1>
    <v-radio-group v-model="corAtual" row>
      <v-radio
        label="Estudando"
        name="estudando"
        color="#990100"
        value="estudando"
      ></v-radio>
      <slot></slot>
      <v-radio
        label="Livre"
        name="livre"
        color="#990100"
        value="livre"
      ></v-radio>
    </v-radio-group>
    <v-card-actions>
    <router-link to= "/"><v-btn text color ="#e8e8e8" @click="salvarAlteracoes">Modificar</v-btn></router-link>
    <router-link to= "/"><v-btn text color ="#e8e8e8" >Cancelar</v-btn></router-link>
        </v-card-actions>

  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: function () {
    return { corAtual: "" };
  },
  props: {
    nome: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["selecionarPessoa", "mudaEstado"]),
    salvarAlteracoes() {
      this.$store.commit('selecionarPessoa',this.nome);
      this.$store.commit('mudaEstado',this.corAtual);
    },
  },
};
</script>

<style>
.atividades {
  padding: 10px 25px;
  height: 120px;
}

input[type="radio"] {
  font-size: 15px;
  margin: auto;
}
</style>