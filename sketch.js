
var canvas, backgroundImg;
var gameState=0;
var playercount;
var allPlayers;
var distance=0;

var database;
var form,game,player;
var car1,car2,car3,car4,cars;
function preload(){
    
    trackImg = loadImage("images/track.jpg");
    car1Img = loadImage("images/racer1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
    groundImg = loadImage("images/ground.png");
    
    
}

function setup(){
    canvas=createCanvas(displayWidth-500,displayHeight-300);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playercount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
    if(gameState=== 2){
        game.end();
    }
}

