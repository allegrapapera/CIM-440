var hitX = 200;
var hitY = 200;
var hitW = 100;
var hitH = 50;

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(255);
  if (mouseX > hitX && mouseX < hitX+hitW && mouseY > hitY && mouseY < hitY+hitH) {
    console.log("Inside!");
    fill("pink");
  }
  else {
    console.log("Outside!");
    fill("white");
    ellipse(100,100,10,10);
  }

  rect(hitX,hitY,hitW,hitH);
}
