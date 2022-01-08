var cat, catImage, catImage2, catImage3;
var mouse, mouseImage, mouseImage2, mouseImage3;
var background, backgroundImage; 

function preload() {
   catImage = loadAnimation("images/cat1.png");
   catImage2 = loadAnimation("images/cat2.png", "images/cat3.png");
   catImage3 = loadAnimation("images/cat4.png")
   mouseImage = loadAnimation("images/mouse1.png")
   mouseImage2 = loadAnimation("images/mouse2.png", "images/ mouse3.png")
   mouseImage3 = loadAnimation("images/mouse4.png");
backgroundImage = loadImage("images/garden.png")
  
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(500, 800, 50, 50);
cat.addAnimation("catStanding", catImage);
cat.scale = 0.15;

mouse = createSprite(300, 800, 50, 50)
mouse.addAnimation("mouseStanding", mouseImage);
mouse.scale = 0.2;

}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
   
  if(cat.isTouching(mouse)){
    cat.velocityX = 0;
    cat.addAnimation("stopped", catImage3);
    cat.changeAnimation("stopped")
    mouse.addAnimation("tease", mouseImage3);
    mouse.changeAnimation("tease");
}

   
    text(mouseX + ',' + mouseY, 10, 45);


    drawSprites();
}


function keyPressed(){

     if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catrunning", catImage2)
        cat.changeAnimation("catrunning");
        mouse.addAnimation("moving", mouseImage2)
        mouse.changeAnimation("moving");
     }


}
