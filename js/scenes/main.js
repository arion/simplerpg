Crafty.scene("main", function() {
  var flower_count = Settings.level + 1;
  Settings.flower_count = 0;
  
  //generate the grass along the x-axis
  for(var i = 0; i < 25; i++) {
    //generate the grass along the y-axis
    for(var j = 0; j < 20; j++) {
      Crafty.e("Grass").attr({x: i * Settings.poligon, y: j * Settings.poligon});
      if (i * Settings.poligon == 160 && j * Settings.poligon == 144) continue;

      if(i > 0 && i < 24 && j > 0 && j < 19 && Crafty.randRange(0, 50) > 40) {        
        if (Crafty.randRange(1,10) == 1 && (flower_count -= 1) > 0) {
          Crafty.e("Flower").attr({x: i * Settings.poligon, y: j * Settings.poligon});
          Settings.flower_count += 1
          // one monster for one flower
          Crafty.e("Monster").attr({x: i * Settings.poligon, y: j * Settings.poligon});
        } else {
          Crafty.e("Bush").attr({x: i * Settings.poligon, y: j * Settings.poligon});
        }
      }
    }
  }
  
  //create the bushes along the x-axis which will form the boundaries
  for(var i = 0; i < 25; i++) {
    Crafty.e("Bush").attr({x: i * Settings.poligon, y: 0});
    Crafty.e("Bush").attr({x: i * Settings.poligon, y: 304});
  }
  
  //create the bushes along the y-axis
  //we need to start one more and one less to not overlap the previous bushes
  for(var i = 1; i < 19; i++) {
    Crafty.e("Bush").attr({x: 0, y: i * Settings.poligon});
    Crafty.e("Bush").attr({x: 384, y: i * Settings.poligon});
  }

  Crafty.e("Player").attr({x: 160, y: 144, z: 1});
});