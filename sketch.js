const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
  bobs1 = new Bobs(200,50);
  bobs2 = new Bobs(250,500);
  bobs3 = new Bobs(300,50);
  bobs4 = new Bobs(350,50);
  bobs5 = new Bobs(400,50);
  
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			


	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

    rope1 = new Rope(bobs1,roof,-80,0);


    rope2 = new Rope(bobs2,roof,+80,0);


    rope3 = new Rope(bobs3,roof,-20,0);
 
    rope4 = new Rope(bobs4,roof,-180,0);


    rope5 = new Rope(bobs5,roof,-100,0);



	
}

function draw() {

  background("#99004d");
  rectMode(CENTER);
  rect(roof.position.x,roof.position.y,230,20);
	Engine.run(engine);
  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  //create ellipse shape for multiple bobs here
bobs1.display();
bobs2.display();
bobs3.display();
bobs4.display();
bobs5.display();
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
  if(keyCode==="UP_ARROW"){
  Matter.Body.applyForce(bobs1.body,bobs1.body.position,20);
}
}