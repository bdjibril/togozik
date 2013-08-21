'use strict';

angular.module('togozikApp').controller('HomeCtrl', function($scope,Slides,$route) {
	  //$scope.slideShow = slideShow;
	  $scope.slideShow = Slides;
	  $scope.$route = $route;
	  
	// Run Holder Manually
		Holder.run();
  });

