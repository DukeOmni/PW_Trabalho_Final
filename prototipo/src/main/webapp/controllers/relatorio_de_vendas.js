SR
.controller("relatorioCtrl", function ($scope) {
    var alturaDiv = screen.height - 100;
    $scope.altura = alturaDiv;
    $scope.veiculos = [{
        veiculo: "carro1",
        vendedor: "vendedor1",
        cliente: "cliente1",
        FP: "FP1",
        valor: "valor1"
    },
        {
        veiculo: "carro2",
        vendedor: "vendedor2",
        cliente: "cliente2",
        FP: "FP2",
        valor: "valor2"
    },
        {
        veiculo: "carro3",
        vendedor: "vendedor4",
        cliente: "cliente4",
        FP: "FP4",
        valor: "valor4"
    },
        {
        veiculo: "carro5",
        vendedor: "vendedor5",
        cliente: "cliente5",
        FP: "FP5",
        valor: "valor5"
    }];
});


