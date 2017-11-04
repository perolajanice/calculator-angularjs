var app = angular.module('myApp',[]).
controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {

$scope.title = "Calculator";
$scope.words = "Welcome to my Calculator made with AngularJS";

$timeout(function(){
$scope.words = "Make your calculations!";
}, 1500);

$scope.a = '';
$scope.b = '';

app.factory('mySomething', function(){
  console.log("mySomething.$get() called");
  return "My Something";
});




$scope.makeCalculations = function(param) {
           var a = Number($scope.a || 0);
           var b = Number($scope.b || 0);

    switch (param) {

      case 'add':
      $scope.result = a+b;
      break;

      case 'minus':
      $scope.result = a-b;
      break;

      case 'times':
      $scope.result = a*b;
      break;

      case 'divide':
      $scope.result = a/b;
      break;


}
};

/*
$scope.add = function() {
           var a = Number($scope.a || 0);
           var b = Number($scope.b || 0);
           $scope.result = a+b;
           }


$scope.minus = function() {
          var a = Number($scope.a || 0);
          var b = Number($scope.b || 0);
          $scope.result = a-b;
          }

$scope.multiply = function() {
          var a = Number($scope.a || 0);
          var b = Number($scope.b || 0);
          $scope.result = a*b;
          }

$scope.divide = function() {
          var a = Number($scope.a || 0);
          var b = Number($scope.b || 0);
          $scope.result = a/b;
          }
          */

$scope.clear = function() {
  $scope.result = '';
  $scope.a = '';
  $scope.b = '';
  console.log('clearing');
};

}]);
