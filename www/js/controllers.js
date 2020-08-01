angular.module('starter')
.controller('ListagemController', function($scope){

		$scope.listaDeProduto = $scope.listaDeCarros =  
		[{"nome" : "Arroz" , "preco" : 25},
		{"nome" : "Feijao" , "preco" : 9},
		{"nome" : "Carne", "preco" : 4},
		{"nome" : "Frango", "preco" : 3},
		{"nome" : "Macarrao", "preco" : 22},
		{"nome" : "Palmito", "preco" : 5},
		{"nome" : "Ervilha", "preco" : 3},
		{"nome" : "Laranja", "preco" : 2},
		{"nome" : "Leite", "preco" : 9},
		{"nome" : "Maionese", "preco" : 5},
		{"nome" : "Uva" ,"preco" : 9},
		{"nome" : "Banana", "preco" : 6}
	   ];

});




angular.module('starter')
.controller('ProdutoEscolhidoController', function($stateParams, $scope){

	$scope.produtoEscolhido = angular.fromJson($stateParams.produto);

	$scope.listaDeEntregas = [{"nome" : "Entrega Padrão", "preco": 25},
								{"nome" : "Entrega Flex", "preco": 40},
								{"nome" : "Entrega Agendada" , "preco" : 35}];

	$scope.mudou = function(entrega, isMarcado){

		if (isMarcado) {
			$scope.produtoEscolhido.preco = 
						$scope.produtoEscolhido.preco + entrega.preco;
		} else {
			$scope.produtoEscolhido.preco = 
						$scope.produtoEscolhido.preco - entrega.preco;
		}

	};


});

angular.module('starter')
.controller('FinalizarPedidoController', function($stateParams, $scope
	, $ionicPopup, $state, MercadoService){

	$scope.produtoFinalizado = angular.fromJson($stateParams.produto);

	$scope.pedido = {};

	$scope.finalizarPedido = function(){

		var produtoFinalizado = {
			params : {
				produto : $scope.produtoFinalizado.nome,
				preco : $scope.produtoFinalizado.preco,
				nome :  $scope.pedido.nome,
				endereco : $scope.pedido.endereco,
				email : $scope.pedido.email
			}
		}

		MercadoService.salvarPedido(produtoFinalizado).then(function(dados){

			$ionicPopup.alert({
				title: 'Parabens',
				template: 'Você acabou de realizar sua compra. Acabamos de enviar mais informações para seu email!'
			}).then(function(){
				$state.go('listagem');
			});

		}, function(erro){
			$ionicPopup.alert({
				title: 'Deu erro',
				template: 'Campos obrigatórios'
			});
		});

	}

});




