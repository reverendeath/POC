var app=angular.module("myApp",[]);
app.controller("myController",function($scope){
  
   $scope.tasks=[];
   var taskData = localStorage['taskslist'];

   if (taskData!== undefined) {
     $scope.tasks=JSON.parse(taskData);
   }

 $scope.enterItem=function () {
    if (event.which == 13 && $scope.item != "") {
     $scope.tasks.push({'name':$scope.item, 'status':false});
     $scope.item='';
     localStorage['taskslist']=JSON.stringify($scope.tasks);
     console.log($scope.tasks);
    };
    
 };

 $scope.contentEdit = function() {
 event.target.contentEditable=event.target.contentEditable == "false" ? "true" : "false";


 };

 $scope.updateTask=function(msg){
  if (event.which == 13 && msg != "") {
    
     $scope.contentEdit();
     console.log($scope.tasks);
    
    }
    
 };



});