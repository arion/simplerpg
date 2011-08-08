Crafty.c('FourwayAI', {
    _speed: 3,
    _interval: null,
        
    init: function() {
    this._movement= { x: 0, y: 0};
    
    this.bind("EnterFrame",function() {
      if (this.disableControls) return;

      if(this._movement.x !== 0) {
        this.x += this._movement.x;
        this.trigger('Moved', {x: this.x - this._movement.x, y: this.y});
      }
      if(this._movement.y !== 0) {
        this.y += this._movement.y;
        this.trigger('Moved', {x: this.x, y: this.y - this._movement.y});
      }
    });
    },
  
  fourway_ai: function(speed) {
    this._speed = speed;
    
    this.make_step();
    
    var kclass = this;
    this._interval = setInterval(function() {
      kclass.make_step();
    }, 1000 * this._speed);
  },
  
  make_step: function() {
    step = Crafty.randRange(-1,1);
    
    if (Crafty.randRange(1,2) == 1) {
      this._movement.x = step;
        this._movement.y = 0;
    } else {
      this._movement.x = 0;
        this._movement.y = step;
    }

        this.trigger('NewDirection', this._movement);
  }
});