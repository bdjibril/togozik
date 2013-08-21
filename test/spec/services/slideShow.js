'use strict';

describe('Service: slideShow', function () {

  // load the service's module
  beforeEach(module('togozikApp'));

  // instantiate service
  var slideShow;
  beforeEach(inject(function (_slideShow_) {
    slideShow = _slideShow_;
  }));

  it('should do something', function () {
    expect(!!slideShow).toBe(true);
  });

});
