var pointX = 0;
var pointY = 0;

function setup() {
  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = width/2;

  console.log("pointX " + pointX + " pointY " + pointY);
}

function draw() {
  // put drawing code here
background(255); //getes rid of the repeated image

//sets points to mouse location
  pointX = mouseX;
  pointY = mouseY;


  rect(pointX-100,pointY-100,200,200);
  ellipse(pointX,pointY,10,10);
  ellipse(pointX+20,pointY-20,30,30);
  ellipse(pointX-20,pointY-20,30,30);

  // arc(x,y,width,height.start,end);
  arc(pointX,pointY+10,50,50,0,PI);
}
