var currentVideoIndex = -1;
var playButton;
var stopButton;
var pauseButton;
var titlePoster;
var girlsFightButton;
var guysFightButton;
var danceButton;
var fightButton;
var restartButton;

var playing = false;

var buttonTimeArray = [];
var videoArray = [];


function preload() {
  videoArray[0] = createVideo("items/Opening.MOV"); //opening
  videoArray[1] = createVideo("items/BoysChoice.MOV"); //boys choice
  videoArray[2] = createVideo("items/GirlsChoice.MOV"); //girls choice
  videoArray[3] = createVideo("items/GuysFight.mp4"); //guys fight
  videoArray[4] = createVideo("items/GuysDance.mp4"); //guys dance
  videoArray[5] = createVideo("items/GirlsFight.mp4"); //girls fight
  videoArray[6] = createVideo("items/GirlsDance.mp4"); //girls dance

  titlePoster = loadImage("items/PizzaShopGoth.png");

}

function setup() {
  //video shown by default after preload, hide below
  videoArray[0].hide();
  videoArray[1].hide();
  videoArray[2].hide();
  videoArray[3].hide();
  videoArray[4].hide();
  videoArray[5].hide();
  videoArray[6].hide();

  // put setup code here
  var cnv = createCanvas(1400,800);

  cnv.id("myCanvas");

  var container0 = createDiv();
  container0.id("container0");
  // # => designate an id, find an id that = container0
  // .html injects html or text into another html tag
  //select("#container0").html("<h1>Your sketch title here!<h1>");
  // .style("css property", "value")
  select("#container0").style("width","1400px"); //setting width of container0
  select("#container0").style("margin", "0 auto"); //center our container, margin: 0 auto; 0 refers to the top and
  //bottom spacing of our container, the auto refers to the left and right spacing of our container

  //To center our container, you need to set a width and margin: 0 auto;
  cnv.parent("#container0");

  playButton = new hitZoneObject(675,600,30,"white",loadImage("items/play.png"));
  stopButton = new hitZoneObject(500,600,30,"white",loadImage("items/stop.png"));
  pauseButton = new hitZoneObject(825,600,30,"white",loadImage("items/pause-button.png"));

  girlsFightButton = new hitZoneObject(500,700,50,"white,",loadImage("items/girlsBattle.png"));
  guysFightButton = new hitZoneObject(825,700,50,"white,",loadImage("items/guysBattle.png"));

  danceButton = new hitZoneObject(500,700,50,"white,",loadImage("items/dance.png"));
  fightButton = new hitZoneObject(825,700,50,"white,",loadImage("items/fight.png"));

  restartButton = new hitZoneObject(675,700,50,"white,",loadImage("items/fight.png"));
  //stopButton.hide();
  //pauseButton.hide();

}

function draw() {

  fill("white");
  playButton.display();
  // put drawing code here
  background("black");
  rect(400, 150, 600, 500, 20);

  //set location for titlePoster

  poster = image(titlePoster,420,175,550,450);

  playButton.display();
  playButton.check();
  //stopButton.display();
  //pauseButton.display();
  if (playing && currentVideoIndex>-1) {
    stopButton.display();
    stopButton.check();
    pauseButton.display();
    pauseButton.check();
  }

  if (videoArray[0].time() > 13) {
    girlsFightButton.display();
    girlsFightButton.check();
    guysFightButton.display();
    guysFightButton.check();
  }

  if (videoArray[1].time() > 9 ) {
    danceButton.display();
    danceButton.check();
    fightButton.display();
    fightButton.check();
  }

  if (videoArray[2].time() > 5) {
    danceButton.display();
    danceButton.check();
    fightButton.display();
    fightButton.check();
  }

  if (videoArray[6].time()>37 || videoArray[5].time()>18 || videoArray[4].time()>46 || videoArray[3].time()>30) {

  }

}

function mousePressed() {
  if (stopButton.overlay == true) {
    console.log("stopButton");
    videoArray[currentVideoIndex].stop();
    videoArray[currentVideoIndex].hide();
    currentVideoIndex = -1;
  }
  if (playButton.overlay == true) {
    if (currentVideoIndex==-1) {
      currentVideoIndex=0;
    }
    //console.log(playButton.label);
    //soundFile.stop();
    //soundFile.play();
    //cowVid.style("display", "inline-blocK"); //puts html elements next to each other
    videoArray[currentVideoIndex].position(428,100);
    videoArray[currentVideoIndex].size(550,450);
    videoArray[currentVideoIndex].show();
    videoArray[currentVideoIndex].play();
    playing = true;
  }
  if (pauseButton.overlay == true) {
    videoArray[currentVideoIndex].pause();
  }
  if (guysFightButton.overlay == true && currentVideoIndex == 0) {
    videoArray[currentVideoIndex].stop();
    videoArray[currentVideoIndex].hide();
    currentVideoIndex = 1;
    videoArray[currentVideoIndex].position(428,100);
    videoArray[currentVideoIndex].size(550,450);
    videoArray[currentVideoIndex].show();
    videoArray[currentVideoIndex].play();
    playing = true;
  }
  if (girlsFightButton.overlay == true && currentVideoIndex == 0) {
    videoArray[currentVideoIndex].stop();
    videoArray[currentVideoIndex].hide();
    currentVideoIndex = 2;
    videoArray[currentVideoIndex].position(428,100);
    videoArray[currentVideoIndex].size(550,450);
    videoArray[currentVideoIndex].show();
    videoArray[currentVideoIndex].play();
    playing = true;
  }
  //guys dance off
  if (danceButton.overlay == true && currentVideoIndex == 1) {
    videoArray[currentVideoIndex].stop();
    videoArray[currentVideoIndex].hide();
    currentVideoIndex = 4;
    videoArray[currentVideoIndex].position(428,100);
    videoArray[currentVideoIndex].size(550,450);
    videoArray[currentVideoIndex].show();
    videoArray[2].volume(0);
    videoArray[3].volume(0);
    videoArray[currentVideoIndex].play();
    playing = true;
  }
  //girls dance off
  if (danceButton.overlay == true && currentVideoIndex == 2) {
    videoArray[currentVideoIndex].stop();
    videoArray[currentVideoIndex].hide();
    currentVideoIndex = 6;
    videoArray[currentVideoIndex].position(428,100);
    videoArray[currentVideoIndex].size(550,450);
    videoArray[currentVideoIndex].show();
    videoArray[2].volume(0);
    videoArray[3].volume(0);
    videoArray[currentVideoIndex].play();
    playing = true;
  }
  //girls fight
  if (fightButton.overlay == true && currentVideoIndex == 2) {
    videoArray[currentVideoIndex].stop();
    videoArray[currentVideoIndex].hide();
    currentVideoIndex = 5;
    videoArray[currentVideoIndex].position(428,100);
    videoArray[currentVideoIndex].size(550,450);
    videoArray[currentVideoIndex].show();
    videoArray[2].volume(0);
    videoArray[3].volume(0);
    videoArray[currentVideoIndex].play();
    playing = true;
  }
  //guys fight
  if (fightButton.overlay == true && currentVideoIndex == 1) {
    videoArray[currentVideoIndex].stop();
    videoArray[currentVideoIndex].hide();
    currentVideoIndex = 3;
    videoArray[currentVideoIndex].position(428,100);
    videoArray[currentVideoIndex].size(550,450);
    videoArray[currentVideoIndex].show();
    videoArray[2].volume(0);
    videoArray[currentVideoIndex].play();
    playing = true;
  }



}


class hitZoneObject {

  constructor(tempX,tempY,tempSize,tempColor,tempImage) {
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempSize;
    this.boxColor = tempColor;
    this.image = tempImage;
  }

  display() {
    fill(this.boxColor);
    //rect(this.x,this.y,this.boxSize,this.boxSize);
    image(this.image,this.x,this.y,this.boxSize,this.boxSize);
    //text(this.label,this.x,this.y-20);

    if (this.overlay == true) {
      fill(127,127);
      rect(this.x,this.y,this.boxSize,this.boxSize);
    }
  }

  check() {
    if(mouseX > this.x && mouseX < (this.x+this.boxSize)&&mouseY > this.y && mouseY < (this.y + this.boxSize)) {
      //console.log("over button " + this.boxColor);
      this.overlay = true;
    } else {
      //console.log("off button " + this.boxColor);
      this.overlay = false;
    }
  }

}
