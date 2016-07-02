$(document).ready(function(){

  $("#game-carousel").carousel();
  $(".game-image").hover(
    function(){
      $(this).addClass("bounce");
      $("#game-info-title").text(game_titles[$(this).attr("id")]);
      $("#game-info-text").text(game_brief[$(this).attr("id")]);
      $("#game-info").addClass("lightSpeedIn");
      $("#game-info").removeClass("lightSpeedOut");
    }, function(){
      $("#game-info").addClass("lightSpeedOut");
      $("#game-info").removeClass("lightSpeedIn");
      $(this).removeClass("bounce");
      }
    );
});
