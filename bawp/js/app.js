var app = angular.module("myApp", ['ngRoute']);


    module.controller("RouteController", function($scope) {

    })






.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/profile', {
    templateUrl: 'profile.html',
    controller: '/RouteController'
  
  })
	});