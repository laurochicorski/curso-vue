new Vue({
    el: '#desafio',
    data: {
        nome: 'Lauro',
        idade: 31,
        linkImagem: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    methods: {
        multiplicaIdade: function() {
            return this.idade * 3
        },
        numeroAleatorio: function() {
            return Math.random();
        }
    }
})