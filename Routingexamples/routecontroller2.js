var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "page.html"
    })
    .when("/banana", {
        templateUrl : "hello.html"
    })
    .otherwise({
        redirectTo : "/"
    });
});