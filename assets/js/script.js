$(document).ready(function(){
  initCarousel();
});

/**
 * This Initializes the carousel and starts it.
 * @author James Worsnop
 */
function initCarousel(){
  //Set the text for the gameinfo div
  $("#game-info-title").text(game_titles['0']);
  $("#game-info-release-year").text(game_release_year['0']);
  $("#game-info-text").text(game_brief['0']);
  $("#game-info-button").attr("href", game_links['0']);

  $("#game-carousel").on("swiperight", (function() {
      $("#game-carousel").carousel("prev");
    }));
   $("#game-carousel").on("swipeleft",(function() {
      $("#game-carousel").carousel('next');
   }));

  //Set the carousel slide / slid event handlers
  $("#game-carousel").on("slide.bs.carousel", function(e){
    $("#game-info").addClass("fadeOut");
    $("#game-info").removeClass("fadeIn");
  });

  $("#game-carousel").on("slid.bs.carousel", function(e){
    var currentGameIndex = $(e.target).find('.carousel-inner > .item.active');
    var nextGameIndex = $(e.relatedTarget).index();
    setNextGameInfo(nextGameIndex);
    $("#game-info").addClass("fadeIn");
    $("#game-info").removeClass("fadeOut");
  });

  //Start the carousel.
  $("#game-carousel").carousel({
    interval: 5000
  });
};

/**
 * This function changes the game information text in the game-info div to the
 * to the next game shown when the carousel slides.
 * @param nextGameIndex - the index of the next game in the carousel.
 * @author JamesWorsnop
 */
function setNextGameInfo(nextGameIndex){
  $("#game-info-title").text(game_titles[nextGameIndex]);
  $("#game-info-release-year").text(game_release_year[nextGameIndex]);
  $("#game-info-text").text(game_brief[nextGameIndex]);
  $("#game-info-button").attr("href", game_links[nextGameIndex]);
}
