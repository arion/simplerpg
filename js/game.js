var AllScripts = [
  // objects
  'js/objects/flower',
  'js/objects/bush',
  'js/objects/grass',
  'js/objects/unit',
  'js/objects/fourway_accel',
  'js/objects/player',
  'js/objects/fourway_ai',
  'js/objects/monster',
  // scenes
  'js/scenes/loading',
  'js/scenes/main',
  'js/scenes/win',
  'js/scenes/lose'
];

var Settings = {
  width: 480, // ширина игрового поля
  height: 320, // высота
  poligon: 16, // размер полигона 16x16
  level: 1, // текущий уровень
  flower_count: 0 // цветоков на уровне
};

function log_in_sidebar(message) {
  if ($('#sidebar div').size() > 7) $('#sidebar div:first').remove();
  $('#sidebar').append('<div>' + message + '</div>');
}

var watchID = null;

function stopWatch() {
  if (watchID) {
    navigator.accelerometer.clearWatch(watchID);
    watchID = null;
  }
}

function startWatch() {
  var options = { frequency: 200 };
  watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
  // window.addEventListener('deviceorientation', function(event) {
  //   Crafty.trigger("Acceleration", {x: event.beta, y: event.alpha, z: event.gamma})
  // }, false);
}

function onSuccess(acceleration) {
  Crafty.trigger("Acceleration", acceleration)
}


function onError() {
  console.log('error!');
}

require(AllScripts, function() {
  require.ready(function() {
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
  });
});