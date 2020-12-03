
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var side1, side2, side3;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    side1 = new Dustbin(980,360,200,20);
    side2 = new Dustbin(870,310,20,100);
    side3 = new Dustbin(1090,310,20,100);
    paper = new Paper(200,345,30,30);
    ground = new Ground(600,380,1200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  side1.display();
  side2.display();
  side3.display();
  paper.display();
  ground.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:40,y:-50})
	}
}



