var iss,issImage;
var spaceCraft,spaceCraftImage;
var hasDocked = false;
var spaceBg;
var spaceCraftImageLEFT,spaceCraftImageDOWN,spaceCraftImageRIGHT;

function preload(){
  spaceBg = loadImage("spacebg.jpg");
  issImage = loadImage("iss.png");
  spaceCraftImage = loadImage("spaceCraft1.png");
  spaceCraftImageUP = loadImage("spaceCraft2.png");
  spaceCraftImageLEFT = loadImage("spaceCraft3.png");
  spacrCraftImageRIGHT =loadImage("spaceCraft4.png");
}
function setup() {
  createCanvas(800,400);
  
  iss = createSprite(400,150,10,10);
  iss.addImage(issImage);
  iss.scale = 0.3;

  spaceCraft = createSprite(200,300,10,10);
  spaceCraft.addImage(spaceCraftImage);
  spaceCraft.scale = 0.2;
}

function draw() {
  background(spaceBg);  
  
  if(!hasDocked){
    spaceCraft.x = 200;

    if(keyDown(LEFT_ARROW)){
         spaceCraft.addImage(spaceCraftImageLEFT);
         spaceCraft.velocityX = -2;
    }
    if(keyDown(RIGHT_ARROW)){
         spaceCraft.addImage(spaceCraftImageRIGHT);
         spaceCraft.velocityX = 1;
    }
    if(keyDown(DOWN_ARROW)){
      spaceCraft.addImage(spaceCraftImage);
      spaceCraft.velocityY = 1;
    }
     if(keyDown(UP_ARROW)){
       spaceCraft.addImage(spaceCraftImageUP);
       spaceCraft.velocityY = -2;
      }
      if(spaceCraft.x === 400 && spaceCraft.y === 200){
        hasDocked = true;
        fill("white");
        textSize(15);
        text("DOCKING SUCCESSFUL !!",400,350);
      }
  }
  
  
  
  drawSprites();
  
}