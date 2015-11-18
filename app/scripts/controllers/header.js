'use strict';

/**
 * @ngdoc function
 * @name ngPaletteLoverApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the ngPaletteLoverApp
 */
angular.module('ngPaletteLoverApp')
  .controller('HeaderCtrl', function($scope, $location) {
    // isActive function from http://stackoverflow.com/a/18562339
    // but I prefer using the ui-router and it's included ui-sref-active property
    // I just considered it overkill for this project
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  });
