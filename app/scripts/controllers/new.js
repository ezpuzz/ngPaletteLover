'use strict';

/**
 * @ngdoc function
 * @name ngPaletteLoverApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the ngPaletteLoverApp
 */
angular.module('ngPaletteLoverApp')
  .controller('NewCtrl', function($scope, Palette) {
    $scope.newPalettes = Palette.list({
      type: 'new',
    });

    $scope.offset = 0;

    $scope.getOlder = function() {
      console.log('getting older');
      $scope.offset = $scope.offset + 20;
      $scope.newPalettes = Palette.list({
        type: 'new',
        resultOffset: $scope.offset,
      });
    };

    $scope.getNewer = function() {
      console.log('getting newer');
      $scope.offset = $scope.offset >= 20 ? $scope.offset - 20 : 0;
      $scope.newPalettes = Palette.list({
        type: 'new',
        resultOffset: $scope.offset,
      });
    };
  });
