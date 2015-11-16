'use strict';

angular.module("app").factory("gamesRepository", [function() {
  return {
    getData: function() {
      return [
        {
          "name": "Argubot Academy EDU",
          "description": "decide how to build a futuristic city on mars, based on claims and evidence for each choice. Teaches how to match evidences to claims, identifying, evaluating, and critiquing arguments.",
          "url": "https://www.glasslabgames.org/games/AA-1",
          "grades": "6-9",
          "platforms": ["iPhone"],
          "educatorsGuide": "https://s3-us-west-1.amazonaws.com/playfully-games/AA-1/brochures/AAEDU+brochure.pdf",
          "dateAdded": "2015-11-15"
        },
        {
          "name": "Digital Compass",
          "description": "An animated choose-your-own-path interactive gaming planform about making (and living with) choices, empty, and evaluating options",
          "url": "https://www.digitalcompass.org/",
          "grades": "6-9",
          "platforms": ["web", "iPhone", "android"],
          "educatorsGuide": "https://d2e111jq13me73.cloudfront.net/sites/default/files/uploads/landing_pages/educator_guide_093015.pdf",
          "dateAdded": "2015-11-15"
        },
        {
	        "name": "Gamestar Mechanic",
	        "description": "teaches game design and programming concepts through a visual interface, starting with 'fix this broken level.' The free version includes one quest; paid version includes several more.",
	        "url": "https://gamestarmechanic.com/",
          "platforms": ["web"],
          "grades": "2-5",
          "dateAdded": "2015-11-15"
        },
        {
          "name": "Lightbot",
          "description": "give the robot instructions (move, turn, jump) to navigate to the blue tiles and light them up. Teaches simple programming and debugging/troubleshooting. The free version covers the first 20 levels.",
          "url": "https://lightbot.com/hocflash.html",
          "platforms": ["web"],
          "grades": "2-5",
          "dateAdded": "2015-11-15"
        },
        {
          "name": "Moonbase Alpha",
          "description": "a 3d game by NASA about building and sustaining a base on the moon. Focuses on STEM concepts like energy, gravity, and engineering.",
          "url": "http://www.nasa.gov/offices/education/programs/national/ltp/games/moonbasealpha/index.html",
          "grades": "6-9",
          "platforms": ["windows"],
          "educatorsGuide": "http://www.nasa.gov/pdf/526940main_Moonbase_Alpha_Educator_Guide_v1.pdf",
          "trailer": "https://www.youtube.com/watch?v=nis2t9EubBs",
          "dateAdded": "2015-11-15"
        },
        {
          "name": "Ratio Rancher",
          "description": "strategy/puzzle game teaching ratios and proportionality.",
          "url": "https://www.glasslabgames.org/games/PRIMA",
          "grades": "6-12",
          "platforms": ["web"],
          "trailer": "https://www.youtube.com/watch?v=YmB7HZzaGWs",
          "dateAdded": "2015-11-15"
        }
      ];
    }
  }
}]);
