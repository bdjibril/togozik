'use strict';

angular.module('togozikApp').controller('HomeCtrl',

function($scope, slides) {
    // $scope.slideShow = slideShow;
    $scope.slideShow = slides;

    // Run Holder Manually
    Holder.run();
});