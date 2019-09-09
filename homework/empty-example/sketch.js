function setup() {
  // put setup code here

createCanvas(500,500);
var backgroundRed = 152;
var backgroundGreen = 228;
var backgroundBlue = 247;

background(backgroundRed,backgroundGreen,backgroundBlue);

}

function draw() {
  // put drawing code here
  strokeWeight(5);

  var white = 255;
  var black = 0;
  fill(white);
  stroke(black);

//body
var bodyX = 250;
var bodyY = 275;
var bodyHeight = 200
var bodyWidth = 150;

ellipse(bodyX,bodyY,bodyWidth,bodyHeight);

//feet
var leftFootX = 200;
var footY = 370;
var footHeight = 20;
var footWidth = 40;

var rightFootX = 300;

ellipse(leftFootX,footY,footWidth,footHeight);
ellipse(rightFootX,footY,footWidth,footHeight);

//eyes
var leftEyeX = 230;
var rightEyeX = 270;
var eyeY = 220;
ellipse(leftEyeX,eyeY,20,20);
ellipse(rightEyeX,eyeY,20,20);

//mouth
ellipse(250,300,50,20);


}
