var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car2,car3,car4,cars;
var track,car1_img,car2_img,car3_img,car4_img;

function preload(){
  car1_img = loadImage("car.png");
  car2_img = loadImage("car.png");
  car3_img = loadImage("car.png");
  car4_img = loadImage("car.png");
  track = loadImage("track.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
