'use strict';

/**
 * @ngdoc overview
 * @name ngPaletteLoverApp
 * @description
 * # ngPaletteLoverApp
 *
 * Main module of the application.
 */
angular
  .module('ngPaletteLoverApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/top', {
        templateUrl: 'views/top.html',
        controller: 'TopCtrl',
        controllerAs: 'top'
      })
      .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'NewCtrl',
        controllerAs: 'new'
      })
      .otherwise({
        redirectTo: '/top'
      });
  });
