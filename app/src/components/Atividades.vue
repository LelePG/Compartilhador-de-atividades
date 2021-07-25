<template>
  <v-card :class="`${nome}-atividades atividades`" height="250px">
    <h1>{{ nome }}</h1>
    <v-radio-group v-model="corAtual" row>
      <v-radio
        label="Estudando"
        name="estudando"
        color="#990100"
        value="estudando"
      ></v-radio>
      <v-radio
        label="Em reunião"
        name="reuniao"
        color="#990100"
        value="reuniao"
      ></v-radio>
      <slot></slot>
      <v-radio
        label="Livre"
        name="livre"
        color="#990100"
        value="livre"
      ></v-radio>
    </v-radio-group>
    <v-text-field
      label="Insira a frase do card"
      filled
      rounded
      dense
      v-model="textoStatus"
    ></v-text-field>
    <v-card-actions class="ma-0 pa-0">
      <router-link to="/"
        ><v-btn text color="#333333" @click="salvarAlteracoes"
          >Modificar</v-btn
        ></router-link
      >
      <router-link to="/"
        ><v-btn text color="#333333">Cancelar</v-btn></router-link
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: function () {
    return { corAtual: "", textoStatus: "" };
  },
  props: {
    nome: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["selecionarPessoa", "mudaEstado", "alteraFraseStatus"]),
    salvarAlteracoes() {
      if (this.corAtual) {
        this.$store.commit("selecionarPessoa", this.nome);
        this.$store.commit("mudaEstado", this.corAtual);
        this.$store.commit("alteraFraseStatus", this.textoStatus);
      }else{
        window.alert("Não foi possível atualizar porque você não selecionou o status.")
      }
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