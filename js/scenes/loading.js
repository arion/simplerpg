Crafty.scene("loading", function() {
  Crafty.load(["images/sprite.png"], function() {
    // выполним это действие, после того как images/sprite.png будет загружен
    setTimeout(function() {
      Crafty.scene("main");
    }, 100);
  });
  
  // меняем цвет фона
  Crafty.background("#000");
  // выводим по центру текст
  Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 200, y: 120})
    .text("Loading... <br/>Level: " + Settings.level)
    .css({"text-align": "center"});
});