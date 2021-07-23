<template>
<div>
    <Atividades :nome = "nome" >
        <slot></slot>
    </Atividades>
    <br>
     <Status :nome = "nome"/>
</div>
</template>

<script>
import Atividades from './Atividades.vue'
import Status from './Status.vue'

export default {
     props: {
    nome: {
      type: String,
      required: true,
    },
    },
    components:{
      Atividades,
      Status,
    },
    methods:{
        getNome(){
            return this.props.nome
        }
    }
}
</script>

<style>

</style>