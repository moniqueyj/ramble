'use strict';

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.controller('NewPostController', ['$log', '$location', 'authService', NewPostController]);
function NewPostController($log, $location, authService) {
  $log.debug('init newpostCtrl');
  this.checkToken = authService.checkToken();


}
