'use strict';

describe('Directive: imageBlender', function () {

  // load the directive's module
  beforeEach(module('bgblenderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<image-blender></image-blender>');
    element = $compile(element)(scope);
    // test here
  }));
});
