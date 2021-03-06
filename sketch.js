var ground;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var polygon;
var slingshot;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  drawSprites();

  ground= new Ground(400,390,800,10)
  stand1= new Ground(390,300,250,10)

  //level one
  block1 = new Box(120,275,30,40)
  block2 = new Box(150,275,30,40)
  block3 = new Box(180,275,30,40)
  block4 = new Box(210,275,30,40)
  block5 = new Box(240,275,30,40)
  block6 = new Box(270,275,30,40)
  block7 = new Box(300,275,30,40)
  //level two
  block8 = new Box(330,235,30,40)
  block9 = new Box(360,235,30,40)
  block10 = new Box(390,235,30,40)
  block11 = new Box(450,235,30,40)
  block12 = new Box(450,235,30,40)
  //level three
  block13 = new Box(360,195,30,40)
  block14 = new Box(390,195,30,40)
  block15 = new Box(420,195,30,40)
  //top
  block16 = new Box(390,155,30,40)

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new Slingshot (this.polygon,{x:100,y:200})




  ground.display();
  stand1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  polygon.display();
  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}