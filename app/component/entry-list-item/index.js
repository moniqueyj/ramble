'use strict';

require('./_entry-list-item.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleEntryListItem', {
  bindings: {
    entry:'='
  },
  template: require('./entry-list-item.html'),
  controller: 'EntryListItemController'
});

ramble.controller('EntryListItemController', ['rambleService', EntryListItemController]);

function EntryListItemController(rambleService) {
  this.bodyPreview = null;
  this.showMe = true;

  if (this.entry.body.length > 75) {
    this.bodyPreview = this.entry.body.slice(0, 74) + '...';
  } else {
    this.bodyPreview = this.entry.body;
  }

  this.deletePost = function() {
    console.log('deleting!');
    rambleService.deleteEntry(this.entry._id)
    .then(data => this.showMe = false);

  };
}
