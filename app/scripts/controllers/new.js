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
    var self = this;

    // initial values
    $scope.offset = 0;

    $scope.hues = [];

    $scope.newPalettes = Palette.list({
      type: 'new',
    });

    // internal functions
    self.getPalettes = function() {
      $scope.newPalettes = Palette.list({
        type: 'new',
        resultOffset: $scope.offset,
        hueOption: $scope.hues.reduce(function(prev, curr) {
          return prev ? prev + ',' + curr : curr;
        }, null),
      })
    };

    // watchers
    $scope.$watch('hues', function(hues) {
      self.getPalettes();
    }, true);

    // actions on the scope
    $scope.getOlder = function() {
      console.log('getting older');
      $scope.offset = $scope.offset + 20;
      self.getPalettes();
    };

    $scope.getNewer = function() {
      console.log('getting newer');
      $scope.offset = $scope.offset >= 20 ? $scope.offset - 20 : 0;
      self.getPalettes();
    };
  });
