<template>
<v-card id = "corpo" color="#333333">
    <v-row>
      <v-col>
    <Atividades nome = "Felipe"/>
      </v-col>
      <v-col>
    <Atividades nome = "Letícia">
           <v-radio label="Trabalhando" name = "trabalhando" color= "#990100"></v-radio>
    </Atividades> 
      </v-col>
    </v-row>

    <v-row>
      <v-col >
        <Status nome ="Felipe"/>
      </v-col>
      <v-col>
        <Status nome = "Letícia"/>
      </v-col>
    </v-row>
</v-card>
</template>

<script>
import Atividades from './Atividades.vue'
import Status from './Status.vue'

export default {
    components:{
      Atividades,
      Status,
    }
}
</script>

<style>
#corpo{
  padding: 15px 8px;
}
</style>