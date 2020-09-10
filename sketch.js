var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, loadCloud;
var rand;



var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle;



function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  loadCloud = loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
  obstacle1 = loadImage("obstacle1.png");
   obstacle2 = loadImage("obstacle2.png");
   obstacle3 = loadImage("obstacle3.png");
   obstacle4 = loadImage("obstacle4.png");
   obstacle5 = loadImage("obstacle5.png");
   obstacle6 = loadImage("obstacle6.png");
  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -7;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(205);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  spawnClouds();
  Obstacle111();
  
  drawSprites();
}


function spawnClouds()
{

  if(World.frameCount % 60 === 0 )
  {
  
      cloud = createSprite (590, 80);
      cloud.addImage(loadCloud);
      cloud.setVelocity(-4, 0);
      //cloud.velocityX = -4;
      rand = Math.round(random(10, 150));
      cloud.y = rand;

      cloud.scale = 0.5;
    
      cloud.lifetime = 150;
    
      cloud.depth = trex.depth;
      trex.depth = trex.depth +1;
  
  
  }



}




function spawnObstacle()
{

if (World.frameCount % 60 === 0)
{

  obstacle = createSprite(600, 180 );
  
  rand = Math.round(random(1, 6));
  
  obstacle.setVelocity(-7,0);
  
  obstacle.scale = 0.5;
  
  switch(rand)
  {
  
    case 1 : obstacle.addImage(obstacle1);
            break;
    case 2 : obstacle.addImage(obstacle2);
            break;
    case 3 : obstacle.addImage(obstacle3);
            break;
    case 4 : obstacle.addImage(obstacle4);
            break;
    case 5 : obstacle.addImage(obstacle5);
            break;
    case 6 : obstacle.addImage(obstacle6);
            break;
   
    default :  break;
  }
  
}


}


















