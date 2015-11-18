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
    var self = this;

    // initial values
    $scope.offset = 0;

    $scope.hues = [];

    $scope.topPalettes = Palette.list();

    // internal functions
    self.getPalettes = function() {
      $scope.topPalettes = Palette.list({
        resultOffset: $scope.offset,
        hueOption: $scope.hues.reduce(function(prev, curr) {
          return prev ? prev + ',' + curr : curr;
        }, null),
      })
    };

    $scope.$watch('hues', function(hues) {
      self.getPalettes();
    }, true);

    $scope.getWorse = function() {
      console.log('getting worse');
      $scope.offset = $scope.offset + 20;
      self.getPalettes();
    };

    $scope.getBetter = function() {
      console.log('getting better');
      $scope.offset = $scope.offset >= 20 ? $scope.offset - 20 : 0;
      self.getPalettes();
    };
  });
