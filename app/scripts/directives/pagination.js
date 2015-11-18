'use strict';

/**
 * @ngdoc directive
 * @name ngPaletteLoverApp.directive:pagination
 * @description
 * # pagination
 */
angular.module('ngPaletteLoverApp')
  .directive('pagination', function() {
    return {
      templateUrl: 'views/pagination.html',
      restrict: 'E',
      replace: true,
      scope: {
        paginationCollection: '=',
        offset: '=',
        previousText: '=?',
        nextText: '=?',
        nextPage: '&',
        previousPage: '&',
      },
      link: function(scope, element, attrs) {
        scope.previousText = attrs.previousText || 'Previous';
        scope.nextText = attrs.nextText || 'Next';
        scope.$watch('paginationCollection', function(coll) {});
        scope.$watch('offset', function(offset) {
          scope.previousDisabled = offset == 0;
        });
      },
    };
  });
