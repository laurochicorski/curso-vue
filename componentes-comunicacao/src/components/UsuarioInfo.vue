<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
         <p>Idade é <strong>{{idade}}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            // required: true
            default: 'Anonimo'
            // default: function() {
            //     return Array(10).fill(0).join(',')
            // }
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        inverterNome() {
            return this.nome
        },
        reiniciarNome() {
            const antigo = this.nome
            this.nome = 'Pedro'
            this.$emit('nomeMudou', {
                novo: this.nome,
                antigo: antigo
            })
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
