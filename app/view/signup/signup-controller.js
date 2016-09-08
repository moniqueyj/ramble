'use strict';

const angular = require('angular');
const ramble = angular.module('ramble');



ramble.controller('SignupController', ['$log', '$location', 'authService', SignupController]);

function SignupController($log, $location, authService) {
  $log.debug('init signupCtrl');

  this.signup = function() {
    $log.debug('init signupCtrl');
    var data = {
      username: this.user.user,
      password: this.user.password
    };
    authService.signup(data)
    .then( token => {
      $log.info('token', token);
    })
    .catch(err => {
      $log.error(err);
    });
  };
}
