angular.module("prototipo", ["ngRoute"]); //Definindo o modulo prototipo
angular.module("prototipo").config(function($routeProvider){ //Configurando o controlador de fluxo das páginas
    $routeProvider.when("/home",        //Ligando a referência ao html de visão
    {
        templateUrl: "Angular/homeView.html"
    });

    $routeProvider.when("/teste",
    {
        templateUrl: "Angular/testeView.html"
    });

    $routeProvider.when("/RelatorioDeVenda",
    {
        templateUrl: "Angular/relatorio_de_vendaView.html"
    });
    
    $routeProvider.otherwise({redirectTo: "/home"});
	$routeProvider.when("/cadastro",
	{ templateUrl: "Angular/view_cadastro.html"
});
});
