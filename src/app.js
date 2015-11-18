'use strict';

angular.module('app').controller('appController', ['$scope', 'gamesRepository',
function ($scope, repo) {
  $scope.currentTab = 'home';
  var allGames = repo.getData();

  $scope.games = allGames;
  //$scope.firstGame = allGames.shift();
  //var midpoint = Math.ceil(allGames.length / 2);
  //$scope.firstHalfGames = allGames.slice(0, midpoint);
  //$scope.secondHalfGames = allGames.slice(midpoint, allGames.length);
  //$scope.selectedGame = null;

  this.selectGame = function(game) {
    $scope.selectedGame = game;
    if (game != null) {
      $scope.selectedImage = game.titleImage;
    }
  }

  this.selectNone = function() {
    this.selectGame(null);
  }

  this.selectImage = function(image) {
    $scope.selectedImage = image;
  }

  this.filterGames = function() {
    var minGrade = $scope.minGrade || null;
    var maxGrade = $scope.maxGrade || null;
    var platformFilter = $scope.platformFilter || null;
    console.log("From " + minGrade + " to " + maxGrade + " p=" + platformFilter);
  }

  // http://stackoverflow.com/a/22735761/210780
  $scope.colFilter = function(col) {
    var count = 0;
    // we hold onto count here, because $filter doesn't
    // tell us the position of `val` in the array
    return function(val) {
        count++;
        if ((count-1) % 2 === col) {
            return val;
        }
    }
  }
  
}]);
