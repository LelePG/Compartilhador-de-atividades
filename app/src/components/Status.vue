<template>
  <v-card :class="estado" min-height="90px">
    <h2>{{ texto }}</h2>
    <p id="textoEstado">{{ estado }}</p>
  </v-card>
</template>

<script>
import IP from "../ip.js"
export default {
  data: function () {
    return {
      estado: "",
      texto: `${this.nome} ainda não iniciou as atividades.`,
    };
  },
  created: function () {
    fetch(`http://${IP.ip}:8081/${this.nome}Status`)
      .then((res) => res.json())
      .then((obj) => {
        this.texto = obj.texto;
        this.estado = obj.estado;
      });
  },
  props: {
    nome: {
      type: String,
      required: true,
    },
  },
  methods: {
    atualizaStatus() {
      fetch(`http://localhost:8081/${this.nome}Status`)
        .then((res) => res.json())
        .then((obj) => {
          this.texto = obj.texto;
          this.estado = obj.estado;
        });
    },
  },
};
</script>

<style>
.reuniao {
  background-color: #8f8f8f !important;
  color: #f6f6f6 !important;
}
.estudando {
  background-color: #666666 !important;
  color: #f6f6f6 !important;
}
.trabalhando {
  background-color: #b90504 !important;
  color: #f6f6f6 !important;
}
.livre {
  background-color: #ff5c5c !important;
  color: #f6f6f6 !important;
}
h2 {
  text-align: center;
}
p#textoEstado {
  margin-top: 30px;
  text-align: center;
}
</style>