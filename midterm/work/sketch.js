//Interaction points: Enter button, return to map button, enter circus, enter diner, diner song, circus song

var currentImage = -1;
var enterButton;
var imageArray = [];
var backButton;
var input;

var hitY = 280;
var hitX = 425;
var hitW = 400;
var hitH = 100;

var hitY2 = 150;
var hitX2 = 310;
var hitW2 = 275;
var hitH2 = 180;

var circusSong;
var dinerSong;

function preload() {
  imageArray[0] = loadImage("town.jpg");
  imageArray[1] = loadImage("tent.jpg");
  imageArray[2] = loadImage("diner.jpg");

  //currentImage = townImage;
}

function setup() {
  // put setup code here
  createCanvas(1500,800);

  circusSong = loadSound("carnival.mp3");
  dinerSong = loadSound("creepy-lullaby.mp3");

  enterButton = createButton("Come Inside");
  enterButton.position(width/2-150, 200);
  enterButton.mousePressed(function(){
    currentImage = 0;
  });

  backButton = createButton("Return to Map");
  backButton.position(200, 700);
  backButton.mousePressed(function(){
    currentImage = 0;
    //Having trouble removing the backButton because of draw() looping; Not sure how to remove
    backButton.hide();
  });

  backButton.hide();


}

function mousePressed() {
  if (currentImage == 0 && mouseX > hitX && mouseX < hitX+hitW && mouseY > hitY && mouseY < hitY+hitH) {
    currentImage = 2;
  }
  else if (currentImage == 0 && mouseX > hitX2 && mouseX < hitX2+hitW2 && mouseY > hitY2 && mouseY < hitY2+hitH2) {
    currentImage = 1;
  }

  if (currentImage == 1) {
    if (circusSong.isPlaying()) {
      circusSong.stop();
    } else {
      circusSong.play();
    }
  }
  if (currentImage == 2) {
    if (dinerSong.isPlaying()) {
      dinerSong.stop();
    } else {
      dinerSong.play();
    }
  }
}

function draw() {
  // put drawing code here
  background("pink");
  textAlign(CENTER);
  text("This is the entrance to Allegra's Corner!", width/2-100, 100);
  text("If you wish to explore, press the button below.", width/2-100, 150);

  if (currentImage > -1) {
    enterButton.remove();
    image(imageArray[currentImage],300,60,imageArray[currentImage].width/4,imageArray[currentImage].height/4);
  }

  if (currentImage == 0) {
    text("Click on either the circus tent or the diner to go inside.", width/2, 50);
    dinerSong.stop();
    circusSong.stop();
  }
//creating input for ghosts

//creating button to go back to map page
  if (currentImage == 1 || currentImage == 2) {
    text("Click your mouse to start or stop playing the music!",width/2-100,50);
 backButton.show();
  }
}
