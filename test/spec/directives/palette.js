'use strict';

describe('Directive: palette', function () {

  // load the directive's module
  beforeEach(module('paletteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<palette></palette>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the palette directive');
  }));
});
