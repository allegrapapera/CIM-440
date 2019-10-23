function setup() {
  // put setup code here
  createCanvas(400,400);
  hello();
  goodbye("kendall");

}

function draw() {
  // put drawing code here
  background(255);
  //frameRate(10);
  //once per frame
  circleColor(random(width),random(height),random(255),random(255),random(255),random(0,200));

  //500x per frame
  for (var i = 0; i < 500; i++) {
    circleColor(random(width),random(height),random(255),random(255),random(255), random(0,200));
  }

  fill('black');
  

  circleHitZone(100,100);


}

function hello() {
  console.log("hello");
}

function goodbye(name) {
  console.log("goodbye " + name);
}

function circleColor(xPos, yPos, r, g, b, cSize) {
  fill(r,g,b);
  ellipse(xPos,yPos,cSize,cSize);
}

function circleHitZone(distX, distY) {
  var curDist = dist(mouseX,mouseY,distX,distY);
  console.log("curDist " + curDist);
  fill(127);
  ellipse(distX,distY,10,10);

  return curDist;
}
