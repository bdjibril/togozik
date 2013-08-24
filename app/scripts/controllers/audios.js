'use strict';

angular.module('togozikApp').controller('AudiosCtrl', function($scope, $route) {
    $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
    $scope.$route = $route;
});