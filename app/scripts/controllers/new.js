'use strict';

/**
 * @ngdoc function
 * @name ngPaletteLoverApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the ngPaletteLoverApp
 */
angular.module('ngPaletteLoverApp')
  .controller('NewCtrl', function ($scope, Palette) {
    $scope.newPalettes = Palette.list({
      type: 'new',
    });
  });
