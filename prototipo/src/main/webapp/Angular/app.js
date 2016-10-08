var SistemaRevenda = angular.module('SistemaRevenda',['ui.router']);

SistemaRevenda.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('home',{
        url: '/home',
        templateUrl: 'view/home.html'
    })

    .state('RelatorioDeVenda',{
        url: '/RelatorioDeVenda',
        templateUrl: 'view/relatorio_de_venda.html'
    });
})