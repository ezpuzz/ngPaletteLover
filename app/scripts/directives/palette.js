'use strict';

/**
 * @ngdoc directive
 * @name ngPaletteLoverApp.directive:palette
 * @description
 * # palette
 */
angular.module('ngPaletteLoverApp')
  .directive('palette', function () {
    return {
      templateUrl: 'views/palette.html',
      restrict: 'E',
    };
  });
