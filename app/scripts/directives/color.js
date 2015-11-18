'use strict';

/**
 * @ngdoc directive
 * @name ngPaletteLoverApp.directive:color
 * @description
 * # color
 */
angular.module('ngPaletteLoverApp')
  .directive('color', function() {
    return {
      template: '<div class="palette-color"></div>',
      restrict: 'E',
      replace: true,
      scope: {
        color: '=',
      },
      link: function(scope, element, attrs) {
        scope.$watch('color', function(color) {
          element.css('width', (color.width * 100) + '%');
          element.css('backgroundColor', color.hex);
        });
      },
    };
  });
