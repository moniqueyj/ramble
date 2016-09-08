'use strict';

const angular = require('angular');
const ramble = angular.module('ramble');

//npm i -S json-loader

ramble.controller('PromptsController',[PromptsController]);

function PromptsController(){
  const vm   = this;
  vm.prompts = require('../../assets/data/prompts.json');


}
