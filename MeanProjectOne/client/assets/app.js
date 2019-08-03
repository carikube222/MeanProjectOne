//***********************************************************************
var app = angular.module('app', ['ngRoute']);
//***********************************************************************
  app.config(function ($routeProvider) {
    console.log('App Config Go!');
    $routeProvider
    .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'mainController',
        // controllerAs: 'MC'
    })
    .when('/new', {
        templateUrl: 'partials/new.html',
        controller: 'newController',
        // controllerAs: 'NC'
    })
    .when('/edit/:id', {
      templateUrl: 'partials/edit.html',
      controller: 'editController',
      // controllerAs: 'EC'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
