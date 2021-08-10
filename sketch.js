var bg_img,iss_img;
var sc_img1,sc_img2,sc_img3,sc_img4;
var iss,spacecraft
var hasDocked=false;



function preload(){
bg_img=loadImage("spacebg.jpg")
iss_img=loadImage("iss.png")
sc_img1=loadImage("spacecraft1.png")
sc_img2=loadImage("spacecraft2.png")
sc_img3=loadImage("spacecraft3.png")
sc_img4=loadImage("spacecraft4.png")
}





function setup() {
  createCanvas(800,400);
  iss = createSprite(330,130);
  iss.addImage(iss_img);
  iss.scale=0.25;

  spacecraft = createSprite(285,240);
  spacecraft.addImage(sc_img1);
  spacecraft.scale=0.15;
}

function draw() {
  background(bg_img); 
  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);

    if(keyDown("UP_ARROW")){
      spacecraft.y=spacecraft.y -2;
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.y=spacecraft.y +2;
      spacecraft.addImage(sc_img2)
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.x=spacecraft.x -2;
      spacecraft.addImage(sc_img4)
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.x=spacecraft.x +2;
      spacecraft.addImage(sc_img3)
    }
  }
  if(spacecraft.y<=(iss.y+70) && spacecraft.x<=(iss.x-10)){
    hasDocked=true
    textSize(25);
    fill("white");
    text("Docking successful",200,300)
    }
  drawSprites();
}