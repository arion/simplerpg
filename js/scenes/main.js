Crafty.scene("main", function() {
  var flower_count = Settings.level + 1;
  Settings.flower_count = 0;
  startWatch();
  
  //generate the grass along the x-axis
  for(var i = 0; i < (Settings.width / Settings.poligon); i++) {
    //generate the grass along the y-axis
    for(var j = 0; j < (Settings.height / Settings.poligon); j++) {
      Crafty.e("Grass").attr({x: i * Settings.poligon, y: j * Settings.poligon});
      if (i * Settings.poligon == 160 && j * Settings.poligon == 144) continue;

      if(i > 0 && i < (Settings.width / Settings.poligon - 1) && j > 0 && j < (Settings.height / Settings.poligon - 1) && Crafty.randRange(0, 50) > 40) {        
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
  for(var i = 0; i < (Settings.width / Settings.poligon); i++) {
    Crafty.e("Bush").attr({x: i * Settings.poligon, y: 0});
    Crafty.e("Bush").attr({x: i * Settings.poligon, y: (Settings.height - Settings.poligon)});
  }
  
  //create the bushes along the y-axis
  //we need to start one more and one less to not overlap the previous bushes
  for(var i = 1; i < (Settings.height / Settings.poligon - 1); i++) {
    Crafty.e("Bush").attr({x: 0, y: i * Settings.poligon});
    Crafty.e("Bush").attr({x: (Settings.width - Settings.poligon), y: i * Settings.poligon});
  }

  $('#score span').html(Settings.level - Settings.flower_count + '/' + Settings.level);

  Crafty.e("Player").attr({x: 160, y: 144, z: 1});
});