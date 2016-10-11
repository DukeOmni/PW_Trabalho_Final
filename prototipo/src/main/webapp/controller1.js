app1.controller("controller1", function ($scope) {//Dados disponíveis para a aplicação
    $scope.PrimeiroNome = "Alex";
    $scope.UltimoNome = "Cruzeiro";
});
app2.controller("controller2",function($scope){
    $scope.PN = "Alex";
    $scope.changeName = function(){ //Definindo um método dentro do controller de app2
        $scope.PN = "João";
    }
});
// Parece que só é possível chama um app por vez em cada html de visão