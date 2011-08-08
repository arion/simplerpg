Crafty.c('Bush', {
  init: function() {
    this.requires("2D");
    this.requires("DOM");
    this.requires("bush"+Crafty.randRange(1,2));
    this.requires("hard_bush");
    
    this.attr({x: 0, y: 0, z: 2});
  },
  
  bush: function(type) {
    this.requires(type);
    
    return this;
  }
});