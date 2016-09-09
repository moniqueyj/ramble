'use strict';

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.controller('DashboardController', ['$log', '$location', 'authService', DashboardController]);

function DashboardController($log, $location, authService) {
  $log.debug('init dashboardCtrl');
  this.checkToken = authService.checkToken();
}
