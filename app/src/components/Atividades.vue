<template>
  <v-card :class = "`${nome}-atividades`">
    <h1>{{ nome }}</h1>
    <input type="radio" id="estudando" name="estado" value="estudando" />
    <label for="estudando">Estudando</label><br />
    <slot></slot>
    <input type="radio" id="livre" name="estado" value="livre" />
    <label for="livre">Livre</label>
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
</style>