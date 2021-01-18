var monster,monImg;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload() {
//preload the images here
monImg=loadImage("images/Monster-01.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  monster=createSprite(800,300,50,50);
  monster.addImage(monImg);
  monster.scale=0.1;
  ground=new  Ground(200,450,1000,10);
  hero=new Hero(200,300);
  rope=new Sling(hero.body,{x:200,y:50});
  box1=new Box(385,340,30,30);
  box2=new Box(390,370,30,30);
  box3=new Box(400,430,30,30);
  box4=new Box(400,400,30,30);

  box5=new Box(420,370,30,30);
  box6=new Box(420,340,30,30);
  box7=new Box(420,430,30,30);
  box8=new Box(420,400,30,30);

}

function draw() {
  background("white");
  Engine.update(engine);
  ground.display();
  hero.display();
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();
  box8.display();
drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
