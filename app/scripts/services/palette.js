'use strict';

/**
 * @ngdoc service
 * @name ngPaletteLoverApp.palette
 * @description
 * # palette
 * Factory in the ngPaletteLoverApp.
 */
angular.module('ngPaletteLoverApp')
  .factory('palette', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
