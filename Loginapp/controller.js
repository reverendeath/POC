var app=angular.module("myApp",["ngRoute"]);



app.config(function($routeProvider,$locationProvider){
$routeProvider
.when('/',{
   templateUrl: 'login.html'
})
.when('/dashboard',{
   resolve:{
    "check": function($rootScope,$location){
      if(!$rootScope.loggedIn){
        $location.path("/");
      }
    
    }
   },
   templateUrl: 'dashboard.html'
})
.otherwise({
    redirectTo:'/'
});
//$locationProvider.html5Mode(true).hashPrefix('!');
});
app.controller("myController",function($scope,$location,$rootScope){

 $scope.Onsubmit=function(){
 var user=$scope.username;
 var pwd=$scope.password;
   if(user=="admin" && pwd=="admin"){
    $rootScope.loggedIn = true;
    $location.path("/dashboard");
   }
   else{
   alert("Wrong entries");
   }
 }
 
});