var bullet,wall;
var speed,weight,thickness;




function setup() 
{
  createCanvas(1600,400);

  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(255,255,255);
  speed = random(223,321);
  weight = random(30, 52);
  bullet = createSprite(50, 200, 50, 10);

  bullet.velocityX = speed;
  
  }


function draw() {
  background(0,0,0);  


  
  
  if(hasCollided(bullet,wall))
  {
  
      bullet.velocityX = 0

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
     
      
      if(damage>10){
        wall.shapeColor = color(255,0,0);
         
        bullet.velocityX = speed;
       

      }

      if(damage<10)
      {
        wall.shapeColor = color(0,255,0);
         
        bullet.velocityX = speed;
      
      }

    

  }
  
  

  drawSprites();
}

function hasCollided(bullet,wall)
{

    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge = wall.x;
    
    if(bulletRightEdge>=wallLeftEdge )
    {

      return true;

    }
    return false;

}