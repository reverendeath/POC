var app=angular.module("myApp",[]);
app.controller("myController",function($scope, $http){
   
   
 $http.get('data.json')
 .then (function successCallback(response){
    console.log("success!");
      $scope.books=response.data.books;
      
   },function errorCallback(response){
     console.log('response');
   });
$scope.add=false;
$scope.edit=false;
$scope.current={};

$scope.addBook=function() {
$scope.add=true;
};

$scope.getTemplate=function(book) {
    if(book.id == $scope.current.id){
        return 'highlight';
    }
    else return 'load.html';
};

$scope.saveBook=function(book){
$scope.books.push(book);
$scope.current={};
$scope.add=false;
};

$scope.deleteBook=function (book) {
  var index=$scope.books.indexOf(book);
  $scope.books.splice(index,1);
};

$scope.editBook=function(index){
$scope.edit=true;
//alert('Editing index' + index);
$scope.current=$scope.books[index];

};

$scope.makeChanges=function() {
$scope.edit=false;
$scope.current={};

};


});