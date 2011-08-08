Crafty.c('Monster', {
  init: function() {
    this.requires("Unit");
    this.requires("monster");
    this.requires("FourwayAI");
    
    this.attr({x: 0, y: 0, z: 1});
    
    this.animate("walk_left", 6, 4, 8);
    this.animate("walk_right", 9, 4, 11);
    this.animate("walk_up", 3, 4, 5);
    this.animate("walk_down", 0, 4, 2);
    
    this.fourway_ai(1);
  },
  
  clear: function() {
    clearInterval(this.removeComponent('monster')._interval);
  }
});