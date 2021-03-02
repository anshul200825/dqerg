var fixSprite1,fixSprite2,fixSprite3,fixSprite4;
var movingSprite;
var canvas;
var music;
z

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    movingSprite=createSprite(random(10,750),300,10,10);
    movingSprite.shapeColour="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3

     fixedSprite1=createSprite(100,590,180,20);
     fixedSprite1.shapeColour="red";

     fixedSprite2=createSprite(300,590,180,20);
     fixedSprite2.shapeColour="green";

     fixedSprite3=createSprite(500,590,180,20);
     fixedSprite3.shapeColour="blue";

     fixedSprite4=createSprite(700,590,180,20);
     fixedSprite4.shapeColour="yellow";



   
}

function draw() {
    background(rgb(10,10,10));
    //create edgeSprite

  if(movingSprite.x<0){
      music.stop;
      movingSprite.velocityX=3;
  }else if(movingSprite.x>800){
      music.stop;
      movingSprite.velocityX=-3;
  }



  if(isTouching(movingSprite,fixedSprite4)){
      music.play();
      movingSprite.shapeColour="yellow";
      bounceOff(movingSprite,fixedSprite4);
}

else if(isTouching(movingSprite,fixedSprite3)){
    music.stop();
    movingSprite.shapeColour="blue";
    bounceOff(movingSprite,fixedSprite3);
}

else if(isTouching(movingSprite,fixedSprite2)){
    music.play();
    movingSprite.shapeColour="green";
    bounceOff(movingSprite,fixedSprite2);
}

else if(isTouching(movingSprite,fixedSprite1)){
    music.play();
    movingSprite.shapeColour="red";
    bounceOff(movingSprite,fixedSprite1);
}

if(movingSprite.y<0){
    music.stop();
    movingSprite.velocityY=3
}













    //add condition to check if box touching surface and make it box
    drawSprites();
}


function isTouching(object1,object2)
{

if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object1.width/2+object2.width/2&&object1.y-object2.y<object2.height/2+object1.height/2&&object2.y-object1.y<object1.height/2+object2.height/2){
  return true;
}
else{
    return false;   
}

}
 
function bounceOff(object1,object2){

if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object1.width/2+object2.width/2){

    object1.velocityX=object1.velocityX*-1;
    object2.velocityX=object2.velocityX*-1

}

if(object1.y-object2.y<object2.height/2+object1.height/2&&object2.y-object1.y<object1.height/2+object2.height/2){


    object1.velocityY=object1.velocityY*-1;
    object2.velocityY=object2.velocityY*-1


}


}

























