var Settings = {
  width: 400,
  height: 320,
  poligon: 16,
  level: 1,
  flower_count: 0
};

window.onload = function() {
  Crafty.init(Settings.width, Settings.height);

  Crafty.sprite(Settings.poligon, "images/sprite.png", {
      grass1: [0,0],
      grass2: [1,0],
      grass3: [2,0],
      grass4: [3,0],
      flower: [0,1],
      bush1: [0,2],
      bush2: [1,2],
      player: [0,3],
      monster: [0,4]
  });

  Crafty.scene("loading");
};
