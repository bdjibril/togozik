"use strict";angular.module("togozikApp",["ngRoute","ngAnimate","firebase"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/videos",{templateUrl:"views/videos.html",controller:"VideosCtrl"}).when("/audios",{templateUrl:"views/audios.html",controller:"AudiosCtrl"}).otherwise({redirectTo:"/home"})}]),angular.module("togozikApp").controller("HomeCtrl",["$scope","Slides","$route",function(a,b,c){a.slideShow=b,a.$route=c,Holder.run()}]),angular.module("togozikApp").controller("VideosCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("togozikApp").controller("AudiosCtrl",["$scope","$route",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.$route=b}]),angular.module("togozikApp").constant("fbUrl","https://djibril.firebaseio.com/slides"),angular.module("togozikApp").factory("Slides",["angularFireCollection","fbUrl",function(a,b){var c=a(b);return c}]);