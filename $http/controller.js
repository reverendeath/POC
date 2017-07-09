var app=angular.module("myApp",[]);
app.controller("myController",function($scope, $http){
   
    //$scope.items=[];
   // $scope.addItem = function () {

    //$scope.items.push({
        //amount: $scope.itemAmount,
      //  name: $scope.itemName
    //});

    //var data = JSON.stringify($scope.items);

   /* $http({
    url: 'http://localhost:8080/data.json',
    method: "POST",
    data: "{"name":"koti","age":24}",
    headers: 'Content-Type: application/json'
    })
    .then(function(response) {
        console.log(response);
    }, 
    function(response) {
        console.log(response);
    });

    // Clear input fields after push
    $scope.itemAmount = "";
    $scope.itemName = "";
};*/
 
 $http.get('http://127.0.0.1:8080/data.json')
 .then (function successCallback(response){
    console.log("success!!");
      $scope.books=response.data.books;
      
   },function errorCallback(response){
     console.log('response');
   })
});