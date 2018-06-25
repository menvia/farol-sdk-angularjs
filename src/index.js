(function() {
  'use strict';
  angular
    .module('FarolSDK', [])
    .provider('FarolSDK', function($injector) {
      this.$get = function() {
        return FarolSDK;
      };
    });
})();
