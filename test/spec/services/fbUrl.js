'use strict';

describe('Service: fbUrl', function () {

  // load the service's module
  beforeEach(module('togozikApp'));

  // instantiate service
  var fbUrl;
  beforeEach(inject(function (_fbUrl_) {
    fbUrl = _fbUrl_;
  }));

  it('should do something', function () {
    expect(!!fbUrl).toBe(true);
  });

});
