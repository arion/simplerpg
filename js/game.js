var Settings = {
  width: 400, // ширина игрового поля
  height: 320, // высота
  poligon: 16, // размер полигона 16x16
  level: 1, // текущий уровень
  flower_count: 0 // цветоков на уровне
};

window.onload = function() {
  Crafty.init(Settings.width, Settings.height); // инизиализируем игровое поле

  // подгружаем спрайт
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

  // запускаем первую сцену
  Crafty.scene("loading");
};
