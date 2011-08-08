Crafty.scene("lose", function() {
  Settings.level = 1;
  
  Crafty.background("#000");
  Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 150, y: 120})
    .text("You lose! <br/>Level: " + Settings.level)
    .css({"text-align": "center"});
  
  setTimeout(function() {
    Crafty.scene("main");
  }, 1000);
});