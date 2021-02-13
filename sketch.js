var A, R;
function setup() {
  createCanvas(800,400);
      A = createSprite(400, 200, 55, 55);
      A.shapeColor = "green";

      B = createSprite(250, 200, 40, 60);
      B.shapeColor = "green";
}

function draw() {
  background("black");  
 
     console.log(B.x-A.x)
   
  B.x = mouseX;
  B.y = mouseY;

  if(B.x-A.x<B.width/2 + A.width/2 && A.x-B.x<B.width/2+A.width/2 && 
    B.y-A.y<B.height/2+A.height/2 && A.y-B.y<A.height/2+B.height/2) {
  A.shapeColor = "red";
  B.shapeColor = "red";  
  } else{
    A.shapeColor ="green";
    B.shapeColor = "green";
  }









  drawSprites();
}
