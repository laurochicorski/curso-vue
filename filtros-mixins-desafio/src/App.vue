<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ frase }}</p>
		<span>{{ frase | trocaEspacoPorVirgula }}</span>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<hr>
		<span>{{ frase2 | contaQuantidaLetras}}</span>
		<hr>
		<span>{{ frase2 | contaQuantida-letras-2}}</span>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<hr>
		<span>{{ frase1Pronta }}</span>
		<hr>
		<span>{{ frase2Pronta }}</span>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
export default {
	filters: {
		trocaEspacoPorVirgula(valor) {
			return valor.replaceAll(' ', ',')
		}

	},
	data() {
		return {
			frase: 'carro avião trem',
			frase2: 'Pedro é legal'
		}
	},
	computed: {
		frase1Pronta() {
			return this.frase.replaceAll(' ', ',')
		},
		frase2Pronta() {
			let arr = this.frase2.split(' ')

			let arrResposta = [];

			arr.forEach(function(palavra) {
				arrResposta.push(palavra + ' (' + palavra.length + ') ')
			})
			
			return arrResposta.join()
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
