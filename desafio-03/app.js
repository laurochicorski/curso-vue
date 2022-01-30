new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado : 'Valor diferente'
    },
    watch: {
        valor(novo, antigo) {
            this.resultado = novo != 37 ? 'Valor Diferente' : 'Valor Igual'
        }, 
        resultado(novo, antigo) {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});