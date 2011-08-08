Crafty.c('Unit', {
  init: function() {
    this.requires("2D");
    this.requires("Canvas");
    this.requires("SpriteAnimation");
    this.requires("Collision"); // компонент столкновения
    
    this.attr({x: 0, y: 0, z: 1});
    
    this.collision(); // подключаем компонент столкновения
    
    // отрабатывем событие столкновения с камнем
    
    this.onHit("hard_bush", function(e) {
      var object = e[0].obj;
      // left
      if (object.x > this.x && (this.x + Settings.poligon) > object.x) {
        this.x -= this._speed;
        this.stop();
      }
      // right
      if (object.x < this.x && this.x < (object.x + Settings.poligon)) {
        this.x += this._speed;
        this.stop();
      }
      // top
      if (object.y < this.y && (this.y + Settings.poligon) > object.y) {
        this.y += this._speed;
        this.stop();
      }
      // bottom
      if (object.y > this.y && this.y < (object.y + Settings.poligon)) {
        this.y -= this._speed;
        this.stop();
      }
    });
    
    // анимация движения, сами указатели на спрайты
    // находятся в дочерних компонентах
    
    this.bind("Moved", function(e) {
      if(this.x < e.x) {
        if(!this.isPlaying("walk_left"))
          this.stop().animate("walk_left", 10);
      }
      if(this.x > e.x) {
        if(!this.isPlaying("walk_right"))
          this.stop().animate("walk_right", 10);
      }
      if(this.y < e.y) {
        if(!this.isPlaying("walk_up"))
          this.stop().animate("walk_up", 10);
      }
      if(this.y > e.y) {
        if(!this.isPlaying("walk_down"))
          this.stop().animate("walk_down", 10);
      }
    });
  }
});