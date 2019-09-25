var hitX = 100;
var hitY = 100;
var threshold = 20;
var hitDistance = 0;
var changeBackground = "white";

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(changeBackground);
  ellipse(hitX,hitY,threshold*2,threshold*2);

  hitDistance = dist(mouseX,mouseY,hitX,hitY);
  console.log("hitDistance " + hitDistance);
  if (hitDistance <= threshold) {
    fill(127);
    text("click me",hitX,hitY+30);
  }
  else {
    fill(255);
  }
}


  function mousePressed() {
    if (hitDistance <= threshold) {
      changeBackground = "blue";
    }
    else {
      changeBackground = "white";
  }
}
