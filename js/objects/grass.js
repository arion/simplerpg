Crafty.c('Grass', {
  init: function() {
    this.requires("2D");
    this.requires("Canvas");
    this.requires("grass"+Crafty.randRange(1,2));
    
    this.attr({x: 0, y: 0});
  }
});