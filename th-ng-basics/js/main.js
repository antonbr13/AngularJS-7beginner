// the second parameter (the empty array) defines the applications dependencies --> the empty array tells angular to create an app called 'toDoListApp'
var app = angular.module("todoListApp", []);

app.controller('mainCtrl', function($scope) {
   $scope.helloWorld = function() {
      console.log('Hello there, this is the helloWorld controller function in the mainCtrl!')
   };
});
