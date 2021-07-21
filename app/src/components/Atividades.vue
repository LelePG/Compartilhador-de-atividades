<template>
  <v-card :class = "`${nome}-atividades atividades`">
    <h1>{{ nome }}</h1>
    <v-radio-group row>
      <v-radio label="Estudando" name = "estudando" color ="#990100"></v-radio>
    <slot></slot>
      <v-radio label="Livre" name = "livre" color="#990100"></v-radio>
    </v-radio-group>
  </v-card>
</template>

<script>
export default {
  data: function () {
    return {
      nome: "teste",
    };
  },
  methods: {
    setNome: function (nome) {
      this.nome = nome;
    },
  },
};
</script>

<style>
.atividades{
  padding: 10px 25px;
  height: 120px;
}

input[type="radio"]{
  font-size:15px;
  margin: auto;
}
</style>