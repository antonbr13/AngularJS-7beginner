// To define an AngularJS app, we first need to define an angular.module. An Angular module is simply a collection of functions that are run when the application is “booted.”

// define the module
// creates the Angular module named myApp

var app = angular.module('myApp', []);

app.controller('PlayerController',['$scope', function($scope) {
   $scope.playing = false;
   $scope.audio = document.createElement('audio');
   $scope.audio. = ''
}]);

app.controller('RelatedController', ['$scope', function($scope) {

}]);


// IN THE HTML --> Now, we want to instantiate our myApp module on our page and tell Angular where in the DOM tree our app lives. To instantiate the module in a page, we’ll be using the ng-app directive, which tells Angular that we want our module to own that part of the DOM tree.

// We can instantiate our own app (module) by simply passing the name of our app as the value in our index.html file: <html ng-app="myApp">
