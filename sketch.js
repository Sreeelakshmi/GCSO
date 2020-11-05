var car,wall,speed,weight;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor="white";
  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor="brown";
  speed=random(55,90)
  weight=random(400,1500);
  car.velocityX=speed;
  
}

function draw() {
  background("black");  
 if(wall.x-car.x<wall.width/2+car.width/2) {
   car.velocity=0;
   var damage=0.5*speed*speed*weight/22509;
   if(damage>180){
     car.shapeColor="red"; }
     if(damage>180&&damage<100){
       car.shapeColor="yellow";
       
     }
     if(damage<100){
       car.shapeColor="green";
     }
  
 }
  
  
  drawSprites();
}