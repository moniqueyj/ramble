'use strict';

require('./_nav.scss');

const angular = require('angular');
const ramble = angular.module('ramble');


ramble.component('rambleNavBar', {
  template: require('./nav.html'),
  controller: function SignoutCtrl($log, $location, authService){
    $log.debug('init SignoutCtrl');
    this.logout = function(){
      authService.logout()
      .then(()=> $location.path('/login'));
    };
  }
});
