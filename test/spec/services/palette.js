'use strict';

describe('Service: palette', function () {

  // load the service's module
  beforeEach(module('paletteApp'));

  // instantiate service
  var palette;
  beforeEach(inject(function (_palette_) {
    palette = _palette_;
  }));

  it('should do something', function () {
    expect(!!palette).toBe(true);
  });

});
