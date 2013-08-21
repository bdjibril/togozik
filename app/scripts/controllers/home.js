'use strict';

angular.module('togozikApp').controller('HomeCtrl',
		function($scope, $route, slides) {
			// $scope.slideShow = slideShow;
			$scope.slideShow = slides;
			$scope.$route = $route;

			// Run Holder Manually
			Holder.run();
		});
