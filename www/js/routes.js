angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('listagem');

$stateProvider

.state('listagem',{
	url : '/listagem',
	templateUrl : 'templates/listagem.html',
	controller: 'ListagemController'
})

.state('produtoescolhido',{
	url : '/produtoescolhido/:produto',
	templateUrl: 'templates/produtoescolhido.html',
	controller: 'ProdutoEscolhidoController'
})

.state('finalizarpedido',{
	url : '/finalizarpedido/:produto',
	templateUrl : 'templates/finalizarpedido.html',
	controller : 'FinalizarPedidoController'
})

})