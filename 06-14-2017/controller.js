var app=angular.module("myApp",["ui.router"]);


app.config(function($stateProvider){
$stateProvider
.state('home',{
   url: '/home',
   templateUrl: 'login.html'
})
.state('form',{
   url: '/form',
   templateUrl: 'form.html'
})
.state('form.msg',{
   templateUrl: 'msg.html'
})
.state('details',{
   url:'/details',
   templateUrl: 'details.html'
});
//.otherwise({
  //  redirectTo:'/'
//});
//$locationProvider.html5Mode({enabled: true, requireBase: false});

});


app.controller("myController",function($scope,$location,$rootScope){

 
 
});