var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider) {
        $routeProvider
            .when("/basic", {
                templateUrl : "basic.html",
                controller : "myController"
            })
            .when("/edu", {
                templateUrl : "edu.html"
            })
            .when("/exp", {
                templateUrl : "exp.html"
            })
            .when("/skills", {
                templateUrl : "skills.html"
            })
            .when("/achieve", {
                templateUrl : "achieve.html"
            })
            .when("/personal", {
                templateUrl : "personal.html"
            })
            .when("/network", {
                templateUrl : "network.html"
            })
            .when("/feedback", {
                templateUrl : "feedback.html"
            })
            .when("/aboutpage", {
                templateUrl : "aboutpage.html"
            })
            .when("/certification", {
                templateUrl : "certification.html"
            })
            .when("/test2", {
                templateUrl : "test2.html"
            })
            .otherwise({
                redirectTo: "/basic"
        });
});