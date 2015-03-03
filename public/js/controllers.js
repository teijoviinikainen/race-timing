var timingControllers = angular.module('timingControllers', []);

timingControllers.controller('CompetitionListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('api/races').success(function(races) {
      $scope.races = races;
    });
  }]);

timingControllers.controller('RaceDetailCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $http.get('api/races/' + $routeParams.raceId).success(function(race) {
		$scope.race = race;
    });
  }]);