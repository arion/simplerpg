Crafty.scene("loading", function() {
  Crafty.load(["images/sprite.png"], function() {
    setTimeout(function() {
      Crafty.scene("main");
    }, 100);
  });
  
  Crafty.background("#000");
  Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 150, y: 120})
    .text("Loading... <br/>Level: " + Settings.level)
    .css({"text-align": "center"});
});