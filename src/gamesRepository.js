'use strict';

angular.module("app").factory("gamesRepository", [function() {
  return {
    getData: function() {
      var toReturn = [
        {
          "name": "Argubot Academy",
          "description": "Decide how to build a futuristic city on mars, based on claims and evidence for each choice. Teaches how to match evidences to claims, identifying, evaluating, and critiquing arguments.",
          "url": "https://www.glasslabgames.org/games/AA-1",
          "grades": "6-9",
          "platforms": ["iPhone"],
          "educatorsGuide": "https://s3-us-west-1.amazonaws.com/playfully-games/AA-1/brochures/AAEDU+brochure.pdf",
          "dateAdded": "2015-11-15",
          "titleImage": "argubot-academy/title.jpg",
          "screenshots": ["argubot-academy/combat-1.jpg", "argubot-academy/map-1.jpg", "argubot-academy/bot-1.jpg", "argubot-academy/construction.jpg"],
          "videos": [
            { "image": "argubot-academy/video-youtube.jpg", "url": "https://www.youtube.com/watch?v=WkvLx8PYxtQ" }
          ]
        },
        {
          "name": "Digital Compass",
          "description": "An animated choose-your-own-path interactive gaming planform about making (and living with) choices, empty, and evaluating options",
          "url": "https://www.digitalcompass.org/",
          "grades": "6-9",
          "platforms": ["web", "ios", "android"],
          "educatorsGuide": "https://d2e111jq13me73.cloudfront.net/sites/default/files/uploads/landing_pages/educator_guide_093015.pdf",
          "dateAdded": "2015-11-15",
          "titleImage": "digital-compass-title.jpg",
          "screenshots": []
        },
        {
	        "name": "Gamestar Mechanic",
	        "description": "Teaches game design and programming concepts through a visual interface, starting with 'fix this broken level.' The free version includes one quest; paid version includes several more.",
	        "url": "https://gamestarmechanic.com/",
          "platforms": ["web"],
          "grades": "2-5",
          "dateAdded": "2015-11-15",
          "titleImage": "gamestar-mechanic-title.jpg",
          "screenshots": []
        },
        {
          "name": "Lightbot",
          "description": "Give the robot instructions (move, turn, jump) to navigate to the blue tiles and light them up. Teaches simple programming and debugging/troubleshooting. The free version covers the first 20 levels.",
          "url": "https://lightbot.com/hocflash.html",
          "platforms": ["web", "android", "ios"],
          "grades": "2-5",
          "dateAdded": "2015-11-15",
          "titleImage": "lightbot-title.jpg",
          "screenshots": ['lightbot/screenshot-1.png', 'lightbot/screenshot-2.jpg']
        },
        {
          "name": "Lure of the Labyrinth",
          "description": "Lure of the Labyrinth casts you in a strange world filled with monsters on a quest to save your pet. It teaches pre-algebra math to middle-schoolers.",
          "url": "https://labyrinth.thinkport.org/www/",
          "platforms": ["web"],
          "grades": "6-8",
          "educatorsGuide": "https://labyrinth.thinkport.org/www/educators/resources/video.php",
          "dateAdded": "2015-12-10",
          "titleImage": "lure-of-the-labyrinth/title.jpg",
          "screenshots": ['lure-of-the-labyrinth/lotl-1.jpg', 'lure-of-the-labyrinth/lotl-2.jpg', 'lure-of-the-labyrinth/lotl-3.jpg', 'lure-of-the-labyrinth/lotl-4.jpg'],
          "videos": [
            {"image": "lure-of-the-labyrinth/video-1.jpg", "url": "https://www.youtube.com/watch?v=SXN9M4hFV8M"}
          ]
        },
        {
          "name": "Moonbase Alpha",
          "description": "A 3d game by NASA about building and sustaining a base on the moon. Focuses on STEM concepts like energy, gravity, and engineering.",
          "url": "http://www.nasa.gov/offices/education/programs/national/ltp/games/moonbasealpha/index.html",
          "grades": "6-9",
          "platforms": ["windows"],
          "educatorsGuide": "http://www.nasa.gov/pdf/526940main_Moonbase_Alpha_Educator_Guide_v1.pdf",
          "trailer": "https://www.youtube.com/watch?v=nis2t9EubBs",
          "dateAdded": "2015-11-15",
          "titleImage": "moonbase-alpha-title.jpg",
          "screenshots": []
        },
        {
          "name": "Ratio Rancher",
          "description": "Strategy/puzzle game teaching ratios and proportionality.",
          "url": "https://www.glasslabgames.org/games/PRIMA",
          "grades": "6-12",
          "platforms": ["web"],
          "trailer": "https://www.youtube.com/watch?v=YmB7HZzaGWs",
          "dateAdded": "2015-11-15",
          "titleImage": "ratio-rancher-title.jpg",
          "screenshots": []
        }
      ];

      // Sort by date added, reverse-chronologically
      return toReturn.sort(function(a, b) {
        if (a.dateAdded != b.dateAdded) {
          // return newest-added first
          return Date.parse(b.dateAdded) - Date.parse(a.dateAdded);
        } else {
          // If tied, return alphabetically
          return a.name.localeCompare(b.name);
        }
      });
    }
  }
}]);
