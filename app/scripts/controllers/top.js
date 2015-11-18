'use strict';

/**
 * @ngdoc function
 * @name ngPaletteLoverApp.controller:TopCtrl
 * @description
 * # TopCtrl
 * Controller of the ngPaletteLoverApp
 */
angular.module('ngPaletteLoverApp')
  .controller('TopCtrl', function ($scope, Palette) {
    $scope.topPalettes = Palette.list();
    $scope.offset = 0;
  });
