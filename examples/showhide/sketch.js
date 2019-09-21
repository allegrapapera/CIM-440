var catImage;

var show;
var hide;

var showAndHide = false;


function preload() {
  catImage = loadImage("cat photo.jpg");
}


function setup() {
  // put setup code here
  createCanvas(400,400);
  show = createButton("Show");
  hide = createButton("Hide");

  show.mousePressed(function(){
    showAndHide = true;
  });

  hide.mousePressed(function(){
    showAndHide = false;
  });
}

function draw() {
  background(255);
  if (showAndHide == true) {
    image(catImage,0,0,catImage.width/4,catImage.height/4);
  }

}
