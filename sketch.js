const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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

  rope = new Rope(bob1.body, {x: 100, y: 500})

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

  rope.display();

  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:1, y:-23})
  }

}



