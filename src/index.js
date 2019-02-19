(function(root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['angular'], factory);
  } else if (typeof module !== 'undefined' &&
    typeof module.exports === 'object') {
    // CommonJS support (for us webpack/browserify/ComponentJS folks)
    module.exports = factory(require('angular'));
  } else {
    // in the case of no module loading system
    // then don't worry about creating a global
    // variable like you would in normal UMD.
    // It's not really helpful... Just call your factory
    return factory(angular);
  }
}(this, function(angular) {
  'use strict';
  // create your angular module and do stuff
  const moduleName = 'FarolSDK';
  const mod = angular.module(moduleName, []);
  /**
   * FarolSDK Angular Provider
   * @param  {Object} $injector Angular injector
   * @this Provider
   */
  mod.provider(moduleName, ['$injector', function($injector) {
    this.$get = function() {
      return FarolSDK;
    };
  }]);
  return moduleName; // the name of your module
}));
