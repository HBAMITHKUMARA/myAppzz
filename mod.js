var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider) {
            $routeProvider
            .when("/edu", {
                templateUrl : "edu.html"
            })
            .when("/page3", {
                templateUrl : "edu.html"
            })
            .otherwise({
                redirectTo: "/"
            });
        });