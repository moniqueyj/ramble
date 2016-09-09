'use strict';

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.controller('EntryController', ['$log', '$location', 'authService', EntryController]);
function EntryController($log, $location, authService) {
  $log.debug('init entryCtrl');
  this.checkToken = authService.checkToken();
}
