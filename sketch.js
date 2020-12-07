
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(400,100,500,20);
	bobObject1 = new bob(100,300);
	bobObject2 = new bob(200,300);
	bobObject3 = new bob(300,300);
	bobObject4 = new bob(400,200);
	bobObject5 = new bob(500,200);
	rope1 = new rope(bobObject1.body,roofObject.body,+bobDiameter*2,0)
	rope2 = new rope(bobObject2.body,roofObject.body,+bobDiameter*2,0)
	rope3 = new rope(bobObject3.body,roofObject.body,+bobDiameter*2,0)
	rope4 = new rope(bobObject4.body,roofObject.body,+bobDiameter*2,0)
	rope5 = new rope(bobObject5.body,roofObject.body,+bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
 
}

function display(){
	roofObject.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}



