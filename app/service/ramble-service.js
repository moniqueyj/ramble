'use strict';

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.factory('rambleService', ['$log', '$q', '$http', 'authService', rambleService]);

function rambleService($log, $q, $http, authService) {
  let service = {};

  service.deleteEntry = function(entryId) {
    return authService.getToken()
    .then (token => {
      let url = `${__API_URL__}/api/entry/${entryId}`;
      let config = {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };

      return $http.delete(url, config);
    })
    .then(res => $q.resolve(res.data))
    .catch(err => $q.reject(err));
  };

  service.getEntry = function(entryId) {
    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/entry/${entryId}`;
      let config = {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };

      return $http.get(url, config);
    })
    .then(res => $q.resolve(res.data))
    .catch(err => $q.reject(err));
  };

  service.fetchEntries = function() {
    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/entries`;
      let config = {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };

      return $http.get(url, config);
    })
    .then(res => {
      $log.info('success -- entries ', res.data);
      return $q.resolve(res.data);
    })
    .catch(err => {
      $log.info('error -- entries ', err);
      return $q.reject(err);
    });
  };

  service.createEntry = function(entry) {
    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/entry`;
      let config = {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };
      return $http.post(url, entry, config);
    })
    .then(res => {
      $log.info('success -- entries ', res.data);
      return $q.resolve(res.data);
    })
    .catch(err => {
      $log.info('error -- entries ', err);
      return $q.reject(err);
    });
  };

  return service;
}
