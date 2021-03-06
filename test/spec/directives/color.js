'use strict';

describe('Directive: color', function () {

  // load the directive's module
  beforeEach(module('ngPaletteLoverApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<color></color>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the color directive');
  }));
});
