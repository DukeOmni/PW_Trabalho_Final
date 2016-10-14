SR.
controller("cadastroCtrl", function($scope, $window){
    $scope.redirectCadastroUsuario = function(){
        $window.location.href = "#/cadastroUsuario";
    };
    $scope.redirectCadastroVeiculo = function(){
        $window.location.href = "#/cadastroVeiculo";
    };
});