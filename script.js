// Variables

// Number of backgrounds
var numOfBackgrounds = 6;

var entranceAnimations = {
  1: {
    "played": false,
    "animation": () => {
      $("#header-section-content-container").css({"opacity": 1, "margin-bottom": "7%"});
      entranceAnimations[1].played = true;
    }
  },
  2: {
    "played": false,
    "animation": () => {
      $("#section-2-content-container").css({"opacity": 1, "margin-top": 0});
      entranceAnimations[2].played = true;
    }
  },
  3: {
    "played": false,
    "animation": () => {
      $("#section-3-content-container").css({"opacity": 1, "margin-top": 0});
      entranceAnimations[3].played = true;
    }
  },
  4: {
    "played": false,
    "animation": () => {
      $("#section-4-content-container").css({"opacity": 1, "margin-bottom": "10%"});
      entranceAnimations[4].played = true;
    }
  },
  5: {
    "played": false,
    "animation": () => {
      $("#section-5-content-container").css({"opacity": 1, "margin-top": 0});
      entranceAnimations[5].played = true;
    }
  },
  6: {
    "played": false,
    "animation": () => {
      $("#section-6-content-container").css({"opacity": 1, "margin-top": 0});
      entranceAnimations[6].played = true;
    }
  }
};

// Make first background visible
setTimeout(() => {
  $("#background-section-1").css("opacity", 1);
  entranceAnimations[1].animation();
}, 0);

// Detect scroll
$(document).scroll(() => {

  // Loop that determines which backgrounds should be opaque
  for(var i = 1; i <= numOfBackgrounds; i++) {
    if(($(document).scrollTop() / $(window).height()) + 1.5 >= i) {
      $("#background-section-"+i).css("opacity", 1);
    } else {
      $("#background-section-"+i).css("opacity", 0);
    }
  }
});

// Detect scroll
$(document).scroll(() => {

  // Loop for entrance animations
  for(var i = 1; i <= numOfBackgrounds; i++) {
    if(($("body").scrollTop() / $(window).height()) + 1.3 >= i && !entranceAnimations[i].played) {
      entranceAnimations[i].animation();
    }
  }
});
