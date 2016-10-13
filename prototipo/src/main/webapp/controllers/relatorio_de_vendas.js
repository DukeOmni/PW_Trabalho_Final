SR
.controller("relatorioCtrl", function ($scope, $window) {
    $scope.redirectVeiculo = function(){
        $window.location.href = '#/informacoesVeiculo';
    };
    $scope.orderByMe = function(x){
        $scope.myOrderBy = x;    
    };
    $scope.veiculos = [{
        veiculo: "carro89",
        vendedor: "vendedor1",
        cliente: "cliente1",
        FP: "FP14",
        valorTotal: "valor15",
        valorLiquido: "VL90",
        valorImpostos: "VI1"
    },
        {
        veiculo: "carro2",
        vendedor: "vendedor0",
        cliente: "cliente24",
        FP: "FP2",
        valorTotal: "valor332",
        valorLiquido: "VL1",
        valorImpostos: "VI9"
    },
        {
        veiculo: "carro3",
        vendedor: "vendedor24",
        cliente: "cliente4",
        FP: "FP422",
        valorTotal: "valor421",
        valorLiquido: "VL2",
        valorImpostos: "VI22"
    },
        {
        veiculo: "carro598",
        vendedor: "vendedor550",
        cliente: "cliente55",
        FP: "FP51",
        valorTotal: "valor51",
        valorLiquido: "VL88",
        valorImpostos: "VI00"
    }];
});


