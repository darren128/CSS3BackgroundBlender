'use strict';

angular.module('bgblenderApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'farbtastic'
])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });