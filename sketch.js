var towerImg, tower;
var ghostImg, ghost; 
var doorImg, door, doorsGroup;


function preload(){
  towerImg = loadImage ("tower.png");
  ghostImg = loadImage ("ghost-standing.png");
  doorImg = loadImage ("door.png");
} 

function setup(){
  createCanvas (600,600);
  
  tower = createSprite (300,300);
  tower.addImage ("tower", towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite (200,200,50,50);
  ghost.addImage ("ghost", ghostImg);
  ghost.scale = 0.5;
  
  doorsGroup = new Group();
}

function draw(){
  background (0);
  
  if (tower.y >400){
    tower.y = 300;
  }
  
  if (keyDown("left_arrow")){
    ghost.x = ghost.x -3;
  }
  
  if (keyDown ("right_arrow")){
    ghost.x = ghost.x +3;
  }
  
  spawnDoors();
  
  drawSprites();
}

function spawnDoors(){
  if (frameCount % 240 === 0){
    door = createSprite (200,-50);
    door.x = Math.round (random(120,400));
    door.velocityY = 1;
    door.addImage (doorImg);
    doorsGroup.add (door);
                   
  }
}


