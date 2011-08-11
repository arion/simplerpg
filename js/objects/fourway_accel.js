Crafty.c("FourwayAccel", { 
  _speed: 3,
  _touch_element: null,
      
  init: function() {
    this._movement= { x: 0, y: 0};
    
    this.accels = {};
    
    this.accels['left'] = false;
    this.accels['right'] = false;
    this.accels['top'] = false;
    this.accels['bottom'] = false;
  },

  fourway_accel: function(speed) {
    var self = this;
    
    self._speed = speed;
    
    self.bind('Acceleration', function(acceleration) {
      if (acceleration.y < -2) this.start_or_stop_move('left');
      if (acceleration.y > 2) this.start_or_stop_move('right');
      if (acceleration.x < -2) this.start_or_stop_move('top');
      if (acceleration.x > 2) this.start_or_stop_move('bottom');
    });

    
    self.bind("EnterFrame",function() {
      if (self.disableControls) return;
    
      if(self._movement.x !== 0) {
        self.x += self._movement.x;
        self.trigger('Moved', {x: self.x - self._movement.x, y: self.y});
      }
      if(self._movement.y !== 0) {
        self.y += self._movement.y;
        self.trigger('Moved', {x: self.x, y: self.y - self._movement.y});
      }
    });
      
    return self;
  },
  
  start_or_stop_move: function(move_type) {
    var move_speed = this.get_speed(move_type);
    
    if (this.accels[move_type]) {
      // stop move
      this._movement.x = Math.round((this._movement.x - move_speed.x)*1000)/1000;
      this._movement.y = Math.round((this._movement.y - move_speed.y)*1000)/1000;
      
      this.accels[move_type] = false;
    } else {
      // start move
      this.accels[move_type] = true;
      
      this._movement.x = Math.round((this._movement.x + move_speed.x)*1000)/1000;
      this._movement.y = Math.round((this._movement.y + move_speed.y)*1000)/1000;
    }
    
    this.trigger('NewDirection', this._movement);
  },
  
  get_speed: function(key_id) {
    switch (key_id) {
      case 'top':
        return {x: 0, y: -this._speed};
      case 'left':
        return {x: -this._speed, y: 0};
      case 'right':
        return {x: this._speed, y: 0};
      case 'bottom':
        return {x: 0, y: this._speed};
    }
  }
});