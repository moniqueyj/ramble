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
  this.getEntries = function() {
    rambleService.fetchEntries()
    .then(entries => {
      console.log('entries', entries);
      this.list = entries;
    });
  };
  this.limit = 5;
  this.loadMore = function(){
    var increamented = this.limit + 5;
    this.limit = increamented > this.list.length ? this.list.length : increamented;
  };


  // var listlength = this.list.length
  // var listlengthPerPage = 5
  // var listEntries = listlengthPerPage + 5;
  // this.entriesPerPage = listEntries;
  // this.pagedEntries=
  //
  // this.pagedEntries = Entry.get(this.currentPage*this.entriesPerPage, this.entriesPerPage);
  //
  // this.entriesPerPage = 5;
  // this.currentPage = 0;
  // this.total = Entry.total(); //Entry should be added as parameter
  // this.loadMore = function(){
  //   this.currentPage++;
  //   var newEntries = Entry.get(this.currentPage*this.entriesPerPage, this.entriesPerPage);
  //   this.list = this.list.concat(newEntries);
  // };
  // this.nextPageIdsabledClass = function(){
  //   return this.currentPage === this.pageCount()-1 ? 'disabled':'';
  // };
  // this.pageCount = function(){
  //   return Math.ceil(this.total/this.entriesPerPage);
  // };
}
