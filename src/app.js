'use strict';

angular.module('app').controller('appController', ['$scope', 'gamesRepository',
function ($scope, repo) {
  $scope.currentTab = 'home';
  var allGames = repo.getData();
  $scope.games = allGames;
  $scope.firstGame = allGames.shift();
  var midpoint = Math.ceil(allGames.length / 2);
  $scope.firstHalfGames = allGames.slice(0, midpoint);
  $scope.secondHalfGames = allGames.slice(midpoint, allGames.length);
  $scope.selectedGame = null;

  this.selectGame = function(game) {
    $scope.selectedGame = game;
  }
}]);
