var pointX = 0;
var pointY = 0;

var faceColor = "blue";

var colorButton;

function setup() {
  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = width/2;

  console.log("pointX " + pointX + " pointY " + pointY);

  var message = "Hello"; //var message only exists within the setup() function
  console.log(message);

  colorButton = createButton("Click to turn purple"); //function part of p5.dom library, it generates an html button
  colorButton.position(20,20);
  colorButton.mousePressed(function(){
    faceColor = "purple";
  });
}

function draw() {
  // put drawing code here
background(255); //gets rid of the repeated image

//Use an if statement to change background color
if (mouseX < width/2) {
  console.log("left side");
  background("green");
}
if (mouseX >= width/2) {
  console.log("right side");
  background("gray");
}

//sets points to mouse location
  pointX = mouseX;
  pointY = mouseY;


  fill(faceColor);
  rect(pointX-100,pointY-100,200,200);
  fill(255);
  ellipse(pointX,pointY,10,10);
  ellipse(pointX+20,pointY-20,30,30);
  ellipse(pointX-20,pointY-20,30,30);

  // arc(x,y,width,height.start,end);
  arc(pointX,pointY+10,50,50,0,PI);
}

function mousePressed() {
  //faceColor = "red";
}

function mouseReleased() {
  //faceColor = "blue";
}

function keyPressed() {
  faceColor = "green";

  if (key == "w") {
    faceColor = "white";
  }
  if (key == "r") {
    faceColor = "red";
  }
}
