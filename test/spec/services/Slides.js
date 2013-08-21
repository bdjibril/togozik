'use strict';

describe('Service: Slides', function () {

  // load the service's module
  beforeEach(module('togozikApp'));

  // instantiate service
  var Slides;
  beforeEach(inject(function (_Slides_) {
    Slides = _Slides_;
  }));

  it('should do something', function () {
    expect(!!Slides).toBe(true);
  });

});
