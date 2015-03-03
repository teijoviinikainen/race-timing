var timingApp = angular.module('timingApp', [
  'ngRoute',
  'timingControllers'
]);

timingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/races', {
        templateUrl: 'partials/race-list.html',
        controller: 'CompetitionListCtrl'
      }).
      when('/races/:raceId', {
        templateUrl: 'partials/race-detail.html',
        controller: 'RaceDetailCtrl'
      }).
      otherwise({
        redirectTo: '/races'
      });
  }]);