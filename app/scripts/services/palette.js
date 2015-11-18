'use strict';

/**
 * @ngdoc service
 * @name ngPaletteLoverApp.palette
 * @description
 * # palette
 * Factory in the ngPaletteLoverApp.
 */
angular.module('ngPaletteLoverApp')
  .factory('Palette', function($resource) {
    return $resource('http://www.colourlovers.com/api/palettes',
      // default parameters
      {
        format: 'json',
        jsonCallback: 'JSON_CALLBACK',
        showPaletteWidths: 1,
        type: 'top',
      },
      // actions
      {
        list: {
          method: 'JSONP',
          url: 'http://www.colourlovers.com/api/palettes/:type',
          isArray: true,
          transformResponse: function(data) {
            return data.map(function(palette, index) {
              palette.colors =  palette.colors.map(function(color, index) {
                return new Color(color, palette.colorWidths[index]);
              });
              return palette;
            });
          },
        },
      });
  });
