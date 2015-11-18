'use strict';

/**
 * @ngdoc directive
 * @name ngPaletteLoverApp.directive:hueFilter
 * @description
 * # hueFilter
 */
angular.module('ngPaletteLoverApp')
  .directive('hueFilter', function() {
    return {
      templateUrl: 'views/hue-filter.html',
      restrict: 'E',
      scope: {
        selectedHues: '=',
      },
      link: function postLink(scope, element, attrs) {
        scope.hues = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'violet', 'fuchsia'];
        scope.toggleHue = function(hue) {
          var hueIndex = scope.selectedHues.indexOf(hue);
          if (hueIndex === -1) {
            scope.selectedHues.push(hue);
          } else {
            scope.selectedHues.splice(hueIndex, 1);
          }
        };
      }
    };
  });
