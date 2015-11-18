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

    $scope.getWorse = function() {
      console.log('getting worse');
      $scope.offset = $scope.offset + 20;
      $scope.topPalettes = Palette.list({
        resultOffset: $scope.offset,
      });
    };

    $scope.getBetter = function() {
      console.log('getting better');
      $scope.offset = $scope.offset >= 20 ? $scope.offset - 20 : 0;
      $scope.topPalettes = Palette.list({
        resultOffset: $scope.offset,
      });
    };
  });
