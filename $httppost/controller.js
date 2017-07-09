var app=angular.module("myApp",[]);
app.controller("myController",function($scope, $http){
   
    //$scope.items=[];
    $scope.addItem = function () {
    var data=$scope.item;
    //$scope.items.push($scope.item);

    $http.post('http://localhost:8080/someUrl', data})
    .then(function(response) {
        console.log(response);
    }, 
    function(response) {
        console.log(response);
    });

    $scope.item = "";
    
};
 
});