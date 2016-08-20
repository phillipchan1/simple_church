const matchify = angular.module('matchify', ['ui.router']);

matchify.controller('mainController', function($scope) {
	$scope.data = "hi";
	$scope.name = 'phil';
});