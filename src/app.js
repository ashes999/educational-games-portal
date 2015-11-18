'use strict';

angular.module('app').controller('appController', ['$scope', 'gamesRepository',
function ($scope, repo) {
  $scope.currentTab = 'home';
  var allGames = repo.getData();

  $scope.allGames = allGames;
  $scope.games = allGames;
  $scope.platforms = ['all', 'web', 'ios', 'android', 'windows']

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
    var gradeFilter = Number($scope.gradeFilter) || null;
    var platformFilter = $scope.platformFilter || null;

    var games = $scope.allGames;
    $scope.games = games.filter(function(game) {
      // Look at the desired grade. Actual grade could be a range or a number.
      // If we're a string range (eg. a-b), treat it as min=a, max=b (inclusive)
      // If we're a number, treat it as min=a, max=a (inclusive)
      var index = game.grades.indexOf('-');
      if (index > -1) {
        game.minGrade = Number(game.grades.substr(0, index));
        game.maxGrade = Number(game.grades.substr(index + 1, game.grades.length));
      } else {
        game.minGrade = game.maxGrade = Number(game.grades);
      }

      if (gradeFilter != null) {
        return gradeFilter >= game.minGrade && gradeFilter <= game.maxGrade;
      }

      if (platformFilter != null && platformFilter != 'all') {
        return game.platforms.indexOf(platformFilter) > -1;
      }

      // No filters? Not filtered out? It's legit.
      return true;
    });
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
