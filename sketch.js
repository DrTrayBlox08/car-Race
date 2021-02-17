var carImage;
var road, car, coinB, coin, policeCar,policeB, score = 0, restart, gameOver, music;
var coinImage,gameOverImage, roadImage, restartImage, policeCarImage;
var PLAY = 1
var END = 0
var gameState = PLAY
function preload(){
    carImage = loadImage("images/Car.png")
    roadImage = loadImage("images/road.png")
    restartImage = loadImage("images/Reset.png")
    gameOverImage = loadImage("images/gameover.png")
    policeCarImage = loadImage("images/PoliceCar.png")
    coinImage = loadAnimation("image/Coin1.png", "image/Coin2.png", "image/Coin3.png", "image/Coin4.png", "image/Coin5.png", "image/Coin6.png")
    music = loadSound("Music.mp3")
    
}

function setup(){
    createCanvas(900,500)
    road = createSprite(440,200,10,10)
    road.addImage(roadImage)
    road.velocityY = 2
    road.scale = 2.0
    coinB = new Group()
    policeB = new Group()
    car = createSprite(220,430,10,10)
    car.addImage(carImage)
    car.scale = 0.08
    restart = createSprite(450,200,10,10)
    restart.addImage(restartImage)
    gameOver = createSprite(450,300,10,10)
    gameOver.addImage(gameOverImage)
    music.loop()

}
function draw(){
    background("black")
    if(gameState===PLAY){
        if(car.x>770){
            car.x=770
        }
        if(car.x<=120){
            car.x=120
        }
        if(car.y<=50){
            car.y=50
        }
        if(car.y>=500){
            car.y=500
        }
        if(road.y>200){
            road.y=100
        }   
        if(keyDown("left")){
            car.x=car.x-7
        }
        if(keyDown("right")){
            car.x=car.x+7
        }
        if(keyDown("up")){
            car.y=car.y-7
        }
        if(keyDown("down")){
            car.y=car.y+7
        }
        coinA()
        enemy()
        if(coinB.isTouching(car)){
        score = score+1
        coinB.destroyEach()
        }
        restart.visible = false
        gameOver.visible = false
        if(car.isTouching(policeB)){
            gameState = END
        }

    }
    if(gameState===END){
        road.y = 150
        policeCar.velocityY = 0
        coinB.destroyEach()
        score=0
        restart.visible = true
        gameOver.visible = true
        if(mousePressedOver(restart)){
        reset()
        }
    }
    drawSprites()
    textSize(30)
    fill("White")
text("Coins:"+score,775,30)



    
}

function coinA(){
if(frameCount%150===0){
coin = createSprite(200,30,10,10)
coin.addAnimation("running",coinImage)
coin.velocityY = 10
coin.scale = 0.6
coin.x = Math.round(random(120,780))
coin.lifetime = 60
coinB.add(coin)
}
}
function enemy(){
    if(frameCount%50===0){
        policeCar = createSprite(200,0,10,10)
        policeCar.addImage(policeCarImage)
        policeCar.velocityY = 20
        policeCar.scale = 0.2
        policeCar.x = Math.round(random(120,700))
        policeCar.lifetime = 60
        policeB.add(policeCar)
    }
}
function reset(){
    gameState=PLAY
    restart.visible = false
    gameOver.visible = false
    score = 0
    policeB.destroyEach()
    policeCar.velocityY = 20
}
