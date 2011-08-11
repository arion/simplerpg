Crafty.scene("win", function() {
  Settings.level += 1;
  stopWatch();
  
  Crafty.background("#000");
  Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 200, y: 120})
    .text("You win! <br/>Level: " + Settings.level)
    .css({"text-align": "center"});
  
  $('#level span').html(Settings.level);
  
  setTimeout(function() {
    Crafty.scene("main");
  }, 1000);
});