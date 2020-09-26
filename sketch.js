const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;

var ground, platform;
var blocks0,blocks1,blocks2,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8,blocks9,blocks10,blocks11,blocks12,blocks13,blocks14,blocks15,blocks16;
var blockString;

function setup() {
  var canvas = createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,690,800,20);
  platform = new Ground(490+30,510-50,240,20)

  blocks0 = new Box(400+30,500-50,30,30);
  blocks1 = new Box(430+30,500-50,30,30);
  blocks2 = new Box(460+30,500-50,30,30);
  blocks3 = new Box(490+30,500-50,30,30);
  blocks4 = new Box(520+30,500-50,30,30);
  blocks5 = new Box(550+30,500-50,30,30);
  blocks6 = new Box(580+30,500-50,30,30);

  blocks7 = new Box(430+30,470-50,30,30);
  blocks8 = new Box(460+30,470-50,30,30);
  blocks9 = new Box(490+30,470-50,30,30);
  blocks10 = new Box(520+30,470-50,30,30);
  blocks11 = new Box(550+30,470-50,30,30);

  blocks12 = new Box(460+30,440-50,30,30);
  blocks13 = new Box(490+30,440-50,30,30);
  blocks14 = new Box(520+30,440-50,30,30);

  blocks15 = new Box(490+30,410-50,30,30);

  blocks16 = new Box2(200,500,40,40);

  blockString = new String(blocks16.body,{x:200, y:500});

}

function draw() {
  background(0,0,255);
  Engine.update(engine);


  blocks0.display();
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();
  blocks10.display();
  blocks11.display();
  blocks12.display();
  blocks13.display();
  blocks14.display();
  blocks15.display();

  blocks16.display();
  
  ground.display();
  platform.display();

}

function mouseDragged(){
  Matter.Body.setPosition(blocks16.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  string.fly();
}