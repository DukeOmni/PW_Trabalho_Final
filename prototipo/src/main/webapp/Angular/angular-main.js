var SR = angular.module("SR",["ngRoute"]);

SR.config(function($routeProvider){ //Configurando o controlador de fluxo das páginas
    $routeProvider.when("/home",        //Ligando a referência ao html de visão
    {
        templateUrl: "view/home.html"
    });

    $routeProvider.when("/RelatorioDeVenda",
    {
        templateUrl: "view/relatorio_de_venda.html",
        controller: "relatorioCtrl"
    });

    $routeProvider.when("/informacoesVeiculo",
    {
        templateUrl: "view/informacoes_veiculo.html"
    });
    
    $routeProvider.otherwise({redirectTo: "/dash"});
	
    $routeProvider.when("/cadastroUsuario",
	{ templateUrl: "view/cadastroUsuario.html",
      controller: "cadastroUsuarioCtrl"
});
    $routeProvider.when("/cadastroVeiculo",
	{ templateUrl: "view/cadastroVeiculo.html",
      controller: "cadastroVeiculoCtrl"
});
     $routeProvider.when("/login",
	{ templateUrl: "view/login.html"
});
     $routeProvider.when("/dash",
	{ templateUrl: "view/index.html"
});

});


