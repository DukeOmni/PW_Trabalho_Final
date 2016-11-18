"use strict";
angular.module("yapp", ["ui.router", "ngAnimate"]).
    config(["$stateProvider", "$urlRouterProvider", function (r, t) {
        t.when("/dashboard", "/dashboard/overview"),
            t.otherwise("/login"),
            r.state("base",
                {
                    "abstract": !0, url: "",
                    templateUrl: "views/base.html"
                })

                .state("login",
                {
                    url: "/login",
                    parent: "base",
                    templateUrl: "views/login.html",
                    controller: "LoginCtrl"
                })

                .state("dashboard",
                {
                    url: "/dashboard",
                    parent: "base",
                    templateUrl: "views/dashboard.html",
                    controller: "DashboardCtrl"
                })

                .state("overview", {
                    url: "/overview",
                    parent: "dashboard",
                    templateUrl: "views/dashboard/overview.html",
                    controller: "overviewCtrl"
                })

                .state("reports", {
                    url: "/reports",
                    parent: "dashboard",
                    templateUrl: "views/dashboard/reports.html",
                    controller: "reportsCtrl"
                })

                .state("cadastroVeiculo", {
                    url: "/cadastroVeiculo",
                    parent: "dashboard",
                    templateUrl: "views/dashboard/cadastroVeiculo.html",
                    controller: "cadastroVeiculoCtrl"
                })
    }]),

    angular.module("yapp")
        .controller("LoginCtrl", ["$scope", "$location", function (r, t) {
            r.submit = function () {
                return t.path("/dashboard"), !1
            }
            r.test = function () {
                var view = document.getElementById("cadastro").hidden;
                if (view) {
                    document.getElementById("cadastro").hidden = false;
                    document.getElementById("login").hidden = true;
                } else if (view == false) {
                    document.getElementById("cadastro").hidden = true;
                    document.getElementById("login").hidden = false;
                }
            }
        }
        ]),

    angular.module("yapp").controller("DashboardCtrl", ["$scope", "$state", function (r, t) {
        r.$state = t
    }]),

    angular.module("yapp").controller("reportsCtrl", function ($scope, $window) {
        $scope.orderByMe = function (x) {
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
    }),

    angular.module("yapp").controller("overviewCtrl", ["$scope", "$location", "$http", function (r, t, $scope) {
        r.cadastroVeiculo = function () {
            var view = document.getElementById("cadastroVeiculo").hidden;
            if (view) {
                document.getElementById("cadastroVeiculo").hidden = false;
                document.getElementById("botao").hidden = true; 
            } else if (view == false) {
                document.getElementById("cadastroVeiculo").hidden = true;
                document.getElementById("botao").hidden = false;
                var carro = {
                nome : document.getElementById("nome").value,
                codigo: document.getElementById("codigo").value,
                placa: document.getElementById("carro").value,
                valor: document.getElementById("placa").value,
                servico : document.getElementById("servico").value,
                data : document.getElementById("data").value
            }
            alert(carro.nome);

            }
        }

    }
    ]);
