var catImage;

function preload() {
  catImage = loadImage("cat photo.jpg");
}


function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  image(catImage,0,0);
  //image(image var, x position, y position, width, height);
  //dividing the width and height by a number scales proportionally
  image(catImage,0,0,catImage.width/4,catImage.height/4);
  //don't pick random sizes (it will look stretched/wrong)
  image(catImage,200,200,154,200);
}
