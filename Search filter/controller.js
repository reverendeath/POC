var app=angular.module("myApp",[]);
app.controller("myController",function($scope, $http){
   
 $http.get('data.json')
 .then (function successCallback(response){
    
      $scope.books=response.data.books;
      
   },function errorCallback(response){
     console.log('response');
   })
});