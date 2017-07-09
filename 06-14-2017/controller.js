var app=angular.module("myApp",["ui.router"]);


app.config(function($stateProvider,$locationProvider){
    $locationProvider.html5Mode(true);
$stateProvider
.state('home',{
   url: '/home',
   templateUrl: 'login.html'
})
.state('form',{
   url: '/form',
   templateUrl: 'form.html',
   controller: 'formController'
})
.state('form.msg',{
   templateUrl: 'msg.html'
})
.state('details',{
   url:'/details',
   templateUrl: 'details.html',
   controller: 'detailsController'
})
.state('details.modal',{
   templateUrl: 'CRmodal.html'

})
//.otherwise({
  //  redirectTo:'/'
//});
//$locationProvider.html5Mode({enabled: true, requireBase: false});

});


app.controller("myController",function($scope,$location,$rootScope){

 
});


app.controller("formController",function($scope){
$scope.servers=[];
$scope.db=[];
$scope.$watch('servers', function(newValue,oldValue){
    console.log($scope.servers);
    $scope.count=$scope.servers.length;
});
$scope.$watch('db', function(newValue,oldValue){
    console.log($scope.db);
    $scope.dbcount=$scope.db.length;
});
$scope.environment=['Development','Test','Production','Stage','DR'];
$scope.options=["Yes","No","NA"];

    $('.form_datetime').datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1
    });
 
});

app.controller("detailsController",function($scope){
    //$scope.templates=[1];
    $scope.details=true;
    $scope.edit=true;
$scope.loadModal=function(){
    if($scope.details){
        return 'CRmodal.html'
    }
    else
        return 'reschedule.html'
}
$scope.reschedule=function(){
    console.log("entered");
    $scope.edit=false;
    $scope.details=false;
    //$scope.loadModal();
}
});

