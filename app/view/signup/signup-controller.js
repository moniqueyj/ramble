'use strict';

const angular = require('angular');
const ramble = angular.module('ramble');



ramble.controller('SignupController', ['$log', '$location', 'authService', SignupController]);

function SignupController($log, $location, authService) {
  $log.debug('init signupCtrl');

  this.showError = false;

  this.checkPass = function (userinfo) {
    if(userinfo.password === userinfo.confirmPassword) {
      $log.debug('this.checkPass', userinfo);
      this.signup(userinfo);
    } else {
      $log.debug('this.checkPass else');
      this.showError = true;
    }
  };

  this.signup = function(userinfo) {
    $log.debug('init signupCtrl');
    var data = {
      username: userinfo.username,
      password: userinfo.password
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
