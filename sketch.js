const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;
  
  bobDiameter = 150;

  ground = new Ground(425, 100, 600, 20);
	
  bob1 = new Bob(200, 500, bobDiameter/2);
  bob2 = new Bob(275, 500, 75);
  bob3 = new Bob(350, 500, 75);
  bob4 = new Bob(425, 500, 75);
  bob5 = new Bob(500, 500, 75);
  bob6 = new Bob(575, 500, 75);
  bob7 = new Bob(650, 500, 75);

  rope1 = new Rope(bob1.body, {x: 200, y: 100});
  rope2 = new Rope(bob2.body, {x: 275, y: 100});
  rope3 = new Rope(bob3.body, {x: 350, y: 100});
  rope4 = new Rope(bob4.body, {x: 425, y: 100});
  rope5 = new Rope(bob5.body, {x: 500, y: 100});
  rope6 = new Rope(bob6.body, {x: 575, y: 100});
  rope7 = new Rope(bob7.body, {x: 650, y: 100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();

  ground.display();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();

}



