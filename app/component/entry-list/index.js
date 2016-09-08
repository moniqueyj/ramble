'use strict';

require('./_entry-list.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleEntryList', {
  template: require('./entry-list.html'),
  controller: 'EntryListController',
  controllerAs: 'entryListCtrl'
});


ramble.controller('EntryListController', ['$log', '$location', 'rambleService', EntryListController]);

function EntryListController($log, $location, rambleService){
  this.list = [];
  this.copylist;
  this.showAll = false;
  this.getEntries = function() {
    rambleService.fetchEntries()
    .then(entries => {
      console.log('entries', entries);
      this.list = entries;
    });
  };

  var incrementedNum = 5;
  this.limit = incrementedNum;
  this.loadMore = function(){
    var incremented = this.limit + incrementedNum;
    this.limit = incremented > this.list.length ? this.list.length : incremented;
  };
  this.loadAll = function(){
    this.showAll = true;
    this.limit = this.list.length;
  };
  this.loadLess = function(){
    if(this.limit >= incrementedNum){
      var reduced = this.limit - incrementedNum;
      // this.limit = reduced < this.list.length ? this.list.length : reduced;
      this.limit = reduced;
      console.log('this.limit', this.limit);
    }
    else{
      alert('No more less button Please!');
    }
  };
}
