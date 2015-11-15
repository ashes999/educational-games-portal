'use strict';

angular.module("app").factory("gamesRepository", [function() {
  return {
    getData: function() {
      return [
        // Portraits
        {
	        "name": "Test Game",
	        "description": "TBD",
	        "url": "http://fake-url.com/hi",
        }
      ];
    }
  }
}]);
