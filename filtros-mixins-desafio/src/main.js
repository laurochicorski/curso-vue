import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contaQuantidaLetras', function(valor){
	let arr = valor.split(' ')

	let arrResposta = [];

	arr.forEach(function(palavra) {
		arrResposta.push(palavra + ' (' + palavra.length + ') ')
	})
	
	return arrResposta.join()
})

Vue.filter('contaQuantidaLetras2', function(valor){
	return valor.split(' ').map(palavra => `${palavra} (${palavra.length}) `).join(' ')
})


new Vue({
	render: h => h(App),
}).$mount('#app')
