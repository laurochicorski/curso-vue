<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!submetido">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<Rotulo nome="Nome">
					<input type="text" v-model="nome">
				</Rotulo>
				<Rotulo nome="Sobrenome">
					<input type="text" v-model="sobrenome">
				</Rotulo>
				<!-- Email -->
				<Rotulo nome="E-mail">
					<input type="email" v-model="email">
				</Rotulo>
					
				<!-- Senha -->
				<Rotulo nome="Senha">
					<input type="password" v-model="senha">
				</Rotulo>
				<!-- Armazenar Dados? (Sim/Não) -->
				<Rotulo nome="Armazena Dados? (Sim/Não)">
					<Escolha v-model="armazenaDados"></Escolha>
				</Rotulo>

				<button @click.prevent="enviar">Enviar</button>
				

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="Nome Completo">
					<NomeCompleto :nome="nome" :sobrenome="sobrenome"></NomeCompleto>
				</Rotulo>
				<Rotulo nome="Nome">
					<span>{{ nome }}</span>
				</Rotulo>
				<Rotulo nome="Sobrenome">
					<span>{{ sobrenome }}</span>
				</Rotulo>
				<Rotulo nome="E-mail">
					<span>{{ email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ senha }}</span>
				</Rotulo>
				<Rotulo nome="Armazena Dados? (Sim/Não)">
					<span>{{ armazenaDados }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha, NomeCompleto },
	data() {
		return {
			nome: '',
			sobrenome: '',
			email: '',
			senha: '',
			armazenaDados : false,
			submetido: false
		}
	},
	methods: {
		enviar() {
			this.submetido = !this.submetido;
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
