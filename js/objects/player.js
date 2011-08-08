Crafty.c('Player', {
  init: function() {
    this.requires("Unit"); // подключаем компонент юнита
    this.requires("player"); // подключаем спрайт игрока
    this.requires("Fourway"); // подключаем компонент движения
    
    this.attr({x: 0, y: 0, z: 1});
    
    this.animate("walk_left", 6, 3, 8);
    this.animate("walk_right", 9, 3, 11);
    this.animate("walk_up", 3, 3, 5);
    this.animate("walk_down", 0, 3, 2);
    
    this.fourway(1);

    this.onHit("flower", function(e) {
      var object = e[0].obj;
      object.clear();
      if ((Settings.flower_count -= 1) == 0) Crafty.scene("win");
    });
    
    this.onHit("monster", function(e) {
      var object = e[0].obj;
      object.clear();
      Crafty.scene("lose");
    });
  }
});