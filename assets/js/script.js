$(document).ready(function(){

  $(".game-image").hover(
    function(){
      $("#game-info-title").text(game_titles[$(this).attr("id")]);
      $("#game-info-text").text(game_brief[$(this).attr("id")]);
      $("#game-info").addClass("lightSpeedIn");
      $("#game-info").removeClass("lightSpeedOut");
    }, function(){
      $("#game-info").addClass("lightSpeedOut");
      $("#game-info").removeClass("lightSpeedIn");
      }
    );
});
