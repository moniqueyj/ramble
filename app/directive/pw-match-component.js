'use strict';

const angular = require('angular');
angular.module('ramble')
.directive('pwCheck', function () {
  console.log('directive found!!!');
  return {
    require: 'ngModel',
    link: function (scope, elem, attrs, ctrl, $setValidity) {
      scope.$watch(attrs['pwCheck'], function (errorMsg) {
        console.log('elem', elem[0]);
        elem[0].setCustomValidity(errorMsg);
        console.log('errorMsg', errorMsg);
        ctrl.$setValidity('pwCheck', errorMsg ? false : true);
        console.log('$', $setValidity);
      });
    }
  };
});
