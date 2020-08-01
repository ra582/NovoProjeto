angular.module('starter')
.service('MercadoService', function($http){

	var url = 'https://aluracar.herokuapp.com/';

	return{
		obterProdutos : function(){
			return $http.get(url).then(function(response){
				return response.data;

			});
		}, 
		salvarPedido : function(pedido){
			return $http.get(url + "salvarpedido" , pedido).then(function(response){
				return "Deu certo.";
			});
		}
	}

});