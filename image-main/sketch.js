var PLAY=1
var END=0
var car,carImage
var car2,car2Image,car2Group
var car3,car3Image,car3Group
var road,roadImage
var Coin,CoinImage,CoinGroup
var gameState= PLAY
var Restart,RestartImage,RestartButton,RestartButtonImage
var Money
var path,path2


function preload(){
    car2Image=loadImage("PoliceCar.png");

RestartImage=loadImage("GameOver.png")
  
RestartButtonImage=loadImage("pixil-frame-0.png")
  carImage=loadImage("Car.png");
  roadImage=loadImage("road.png");


  car3Image=loadImage("YellowCar.png");
  
CoinImage=loadAnimation("Coin1.png","Coin2.png","Coin3.png","Coin4.png","Coin5.png","Coin6.png")
}

function setup() {
 createCanvas(600,550)

road=createSprite(300,200,10,10)
  road.addImage(roadImage);
road.velocityY=10
  
  
car=createSprite(225,450,10,10)
car.addImage(carImage)
car.scale=0.07
  
  Restart=createSprite(300,200,10,10);
Restart.addImage(RestartImage);
  Restart.scale=0.7
    
  RestartButton=createSprite(310,350,10,10);
RestartButton.addImage(RestartButtonImage);
  RestartButton.scale=2.7
  
car2Group= new Group();
 CoinGroup=new Group();
  
  Money=0; 
  
}

function draw() {   
  background("grey")
   
console.log(Money)
  if (gameState === PLAY) {   
   Restart.visible=false
    RestartButton.visible=false
   
   if(car.x>=545){
     car.x=545
   }   
   
    if(car.x<=50){
     car.x=50
   }
      if(car.y<=50){
     car.y=50
   }   
        if(car.y>=500){
     car.y=500
   }
 
   
  if(road.y>300){
  road.y=225
  }

CoinSpawn ();
  

   
 if(CoinGroup.isTouching(car))  {
   Money=Money+1
  
 CoinGroup.destroyEach();
     
 }
   

   
   
   
Money.depth=road.depth
  Money.depth=+1
  
  
  
  
  
  
  if(keyDown("right")){
    car.x=car.x+7
  }
  
   if(keyDown("left")){
    car.x=car.x-7
  }
  
   if(keyDown("up")){
    car.y=car.y-7
  }
  
  if(keyDown("down")){
    car.y=car.y+7
  }

  
  
  
  Police();
   
if(car.isTouching(car2Group)){
 gameState=END
  
  
}
  
  
 }
  
  
if(gameState===END){
road.y=300
car2.velocityY=0
  
Restart.visible=true
RestartButton.visible=true
   
 
  CoinGroup.destroyEach()
  
  
   if(mousePressedOver(RestartButton))  {
     reset();
        // gameState="play"
   }

}
  
  

  
 drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
   textSize(30)
   text("Money="+Money+"$",300,30) 
}


function Police(){
 
   if (frameCount%30===0){
    car2=createSprite(200,0,10,10);
    car2.addImage(car2Image)
    car2.velocityY=20
    
 car2.scale=0.2
    car2.x=Math.round(random(40,560))
    car2.lifetime=60
      car2Group.add(car2)
  }
    
 
}

function CoinSpawn(){
   if (frameCount%150===0){
    Coin=createSprite(200,30,10,10);
    Coin.addAnimation("running",CoinImage)
    Coin.velocityY=10
 Coin.scale=0.6
    Coin.x=Math.round(random(40,560))
    Coin.lifetime=60
     CoinGroup.add(Coin);
      
  }
}
function reset(){
  gameState=PLAY
Restart.visible=false
RestartButton.visible=false 

  

  car2.velocityY=20
  car2Group.destroyEach();
  Money=0
}
console.log(Money)