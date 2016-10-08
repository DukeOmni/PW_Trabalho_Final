angular.module("prototipo", ["ngRoute"], 'ngAnimate')
.config(function($routeProvider){ //Configurando o controlador de fluxo das páginas
    $routeProvider.when("/home",        //Ligando a referência ao html de visão
    {
        templateUrl: "view/home.html"
    });

    $routeProvider.when("/teste",
    {
        templateUrl: "view/teste.html"
    });

    $routeProvider.when("/RelatorioDeVenda",
    {
        templateUrl: "view/relatorio_de_venda.html"
    });
    
    $routeProvider.otherwise({redirectTo: "/home"});
	$routeProvider.when("/cadastro",
	{ templateUrl: "view/cadastro.html"
});
});
