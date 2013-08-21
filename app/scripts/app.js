'use strict';

angular.module('togozikApp', ['ngRoute','ngAnimate','firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl'
      })
      .when('/audios', {
        templateUrl: 'views/audios.html',
        controller: 'AudiosCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
