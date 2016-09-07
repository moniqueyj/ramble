'use strict';

require('./_create-post.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleCreatePost', {
  template: require('./create-post.html'),
  controller: 'NewPostController',
  controllerAs: 'newPostCtrl'
});

ramble.controller('NewPostController', ['$q', '$log', '$location', 'authService', 'rambleService', NewPostController]);

function NewPostController($q, $log, $location, authService, rambleService) {

  this.createEntry = function() {
    $log.info('creating post', this.post);
    rambleService.createEntry(this.post)
    .then(entry => $log.info('entry created, what now?', entry))
    .catch(err => $log.err('no entry created', err));
  };
}
