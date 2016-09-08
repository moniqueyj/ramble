'use strict';

const angular = require('angular');
angular.module('ramble')
.directive('pwCheck', function () {
  return {
    require: 'ngModel',
    link: function (scope, elem, attrs, ctrl, $setValidity) {
      scope.$watch(attrs['pwCheck'], function (errorMsg) {
        elem[0].setCustomValidity(errorMsg);
        console.log(errorMsg);

        // should be refactored at some point
        ctrl.$setValidity('pwCheck', errorMsg ? false : true);
      });
    }
  };
});
