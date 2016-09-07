'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');


// angular modules
angular.module('ramble', [ngRoute])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/signup', {
    template: require('./view/signup/signup.html'),
    controller: 'SignupController',
    controllerAs: 'signupCtrl'
  })
  .when('/signin', {
    template: require('./view/signin/signin.html'),
    controller: 'SigninController',
    controllerAs: 'signinCtrl'
  })
  .when('/new/post', {
    template: require('./view/new-post/new-post.html')
  })
  .when('/dashboard', {
    template: require('./view/dashboard/dashboard.html')
  });

}]);

// angular services
require('./service/auth-service');
require('./service/ramble-service');

// angular components
require('./component/nav');
require('./component/create-post');
require('./component/entry-list');
require('./component/entry-list-item');

// angular controllers
require('./view/signup/signup-controller.js');
require('./view/signin/signin-controller.js');

//angular directives//
// require('./directive/signin-directive.js');
// require('./directive/signup-directive.js');
require('./directive/pw-match-component.js');
