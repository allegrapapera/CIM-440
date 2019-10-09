var seasonsSelect;
var seasonType = "";

var sunX = 0;
var sunY = 0;

var snowX = [];
var snowY = [];
var snowAmount = 100;

var leafX = [];
var leafY = [];
var leafAmount = 100;
var leafImage;

function preload() {
  leafImage = loadImage("https://openclipart.org/image/300px/svg_to_png/257622/1470680735.png");
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  seasonsSelect = createSelect();
  seasonsSelect.position(10,10);
  seasonsSelect.option("");
  seasonsSelect.option("fall");
  seasonsSelect.option("winter");
  seasonsSelect.option("spring");
  seasonsSelect.option("summer");
  seasonsSelect.changed(function(){

    seasonType = seasonsSelect.value();

  });

  sunY = height*2;
  sunX = width/2;

  for (var i = 0; i < snowAmount; i++) {
    snowX[i] = random(0, width);
    snowY[i] = random(-500, 0);
  }
  console.log("snowX " + snowX);
  console.log("snowY " + snowY);

  for (var i = 0; i < leafAmount; i++) {
    leafX[i] = random(0, width);
    leafY[i] = random(-500, 0);
  }

}

function draw() {
  // put drawing code here
  background(255);
  if (seasonType == "fall") {
      console.log("fall");

      for (var x = 0; x < leafAmount; x++) {
        image(leafImage,leafX[x],leafY[x],20,20);

        if (leafY[x] < height-20) {
          leafY[x]++;
          leafX[x] = leafX[x] + sin(radians(frameCount)); //Makes leaves sway
        }
      }

  } else if (seasonType == "winter") {
    console.log("winter");

    for (var x = 0; x < snowAmount; x++) {
      snowY[x]++; //You could increase the increment in order to speed up the snow
      ellipse(snowX[x],snowY[x],10,10);
      fill("white");
      stroke("black");
      if (snowY[x] > height) {
        snowY[x] = random(-500, 0);
        snowX[x] = random(0, width);
      }
    }

  } else if (seasonType == "spring") {
    console.log("spring");
  } else if (seasonType == "summer") {
    console.log("summer");
    ellipse(sunX,sunY,width,height);
    fill("orange");
    stroke("red");
    if (sunY > height) {
      sunY = sunY - 1;
    }
  } else {
    console.log("blank");
    text("Make a selection", 100, 25);
  }
}
