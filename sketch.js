const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var background, bgImg
var snow1 = []


function preload() {
  bgImg = loadImage("snow3.jpg")
  sound1=loadSound("203588068.mp3")
}

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  for (var i = 0; i < 100; i++) {
    snow1.push(new SNOW(random(0, 800), random(0, 400), 20, 20));
  }
sound1.loop()
}

function draw() {
  background(bgImg);
  Engine.update(engine);
  for (var i = 0; i < 100; i++) {
    if (snow1[i].body.position.y > 400) {
      Body.setPosition(snow1[i].body, { x: random(0, 800), y: random(0, 400) });

    }
  }
  for (var i = 0; i < 100; i++) {
    snow1[i].display();
  }

  drawSprites();
}