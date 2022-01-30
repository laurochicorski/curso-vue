new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(e) {
            alert('Alerta')
        },
        armazenarValor(e) {
            this.valor = e.target.value
        }
    }
})