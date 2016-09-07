'use strict';

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.factory('authService', ['$location','$log', '$q', '$window', '$http', authService]);

function authService($location, $log, $q, $window, $http) {
  let service = {};
  let token = null;

  function _setToken(_token) {
    if (!_token) return $q.reject(new Error('token not found'));
    $window.localStorage.setItem('token', _token);
    token = _token;
    $q.resolve(token);
    $location.path('dashboard');
    return;
  }

  service.logout = function() {
    $window.localStorage.removeItem('token');
    token = null;
    return $q.resolve();
  };

  service.getToken = function() {
    if (token) return $q.resolve(token);
    token = $window.localStorage.getItem('token');

    if(token) return $q.resolve(token);
    return $q.reject(new Error('token not found'));
  };

  service.signup = function(user) {
    let url = `${__API_URL__}/api/signup`;
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    return $http.post(url, user, config)
    .then(res => {
      $log.info('success -- ', res.data);
      return _setToken(res.data);
    })
    .catch(err => {
      $log.info('error -- ', err);
      return $q.reject(err);
    });
  };

  service.signin = function(user) {
    $log.debug(authService.signin);
    let url = `${__API_URL__}/api/signin`;
    let authString = $window.btoa(`${user.username}:${user.password}`);
    let config = {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Basic: ${authString}`
      }
    };

    return $http.get(url, config)
    .then(res => {
      $log.info('success signed-in', res.data);
      return _setToken(res.data);
    })
    .catch(err => {
      $log.info('error signing in ', err);
      return $q.reject(err);
    });
  };

  return service;
}
