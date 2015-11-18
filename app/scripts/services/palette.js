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
      },
      // actions
      {
        listNew: {
          method: 'JSONP',
          url: 'http://www.colourlovers.com/api/palettes/new',
          isArray: true,
          transformResponse: function(data) {
            return data.map(function(palette, index) {
              palette.colors =  palette.colors.map(function(color, index) {
                return {
                  hex: '#' + color,
                  width: palette.colorWidths[index],
                };
              });
              return palette;
            });
          },
        },
        listTop: {
          method: 'JSONP',
          url: 'http://www.colourlovers.com/api/palettes/top',
          isArray: true,
          transformResponse: function(data) {
            return data.map(function(palette, index) {
              palette.colors =  palette.colors.map(function(color, index) {
                return {
                  hex: '#' + color,
                  width: palette.colorWidths[index],
                };
              });
              return palette;
            });
          },
        }
      });
  });
