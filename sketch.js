
var mario, marioPlaying;
var bg, bgImage;

function preload() {

 marioPlaying = loadAnimation("images/mario1.png","images/mario2.png","images/mario3.png")
 bgImage = loadImage("images/bg.png");
}

function setup() {
  createCanvas(800,400);

 bg = createSprite(400,200,800,400);
 bg.addImage("background",bgImage);
 bg.scale =0.5;

 mario = createSprite(200,200,50,50);
 mario.addAnimation("playing",marioPlaying);
mario. scale =1.7;

}

function draw() {
  background("black");  

  drawSprites();
}