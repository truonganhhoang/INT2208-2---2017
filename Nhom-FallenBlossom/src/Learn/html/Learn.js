var app = angular.module('app', []);

app.controller('control', ['$scope', function ($scope) {

	$scope.Videos = [false, false];

	$scope.playVideo1 = function() {
		$scope.Videos[0] = ! $scope.Videos[0]
	}
	
	$scope.playVideo2 = function() {
		$scope.Videos[1] = ! $scope.Videos[1]
	}
	
	$scope.playVideo3 = function() {
		$scope.Videos[2] = ! $scope.Videos[2]
	}
	
	$scope.playVideo4 = function() {
		$scope.Videos[3] = ! $scope.Videos[3]
	}
	
	$scope.playVideo5 = function() {
		$scope.Videos[4] = ! $scope.Videos[4]
	}
	
	$scope.playVideo6 = function() {
		$scope.Videos[5] = ! $scope.Videos[5]
	}
	
	$scope.playVideo7 = function() {
		$scope.Videos[6] = ! $scope.Videos[6]
	}
	
	$scope.playVideo8 = function() {
		$scope.Videos[7] = ! $scope.Videos[7]
	}
	
}])

