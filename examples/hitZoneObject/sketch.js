var button1;
var button2;

var soundFile;
var cowVid;

function preload() {
  soundFile = loadSound("assets/CowMoo.mp3");
  cowVid = createVideo("assets/cow.mp4")
}

function setup() {
  // put setup code here
  var cnv = createCanvas(400,400);

  cnv.id("myCanvas");

  var container0 = createDiv();
  container0.id("container0");
  // # => designate an id, find an id that = container0
  // .html injects html or text into another html tag
  //select("#container0").html("<h1>Your sketch title here!<h1>");
  // .style("css property", "value")
  select("#container0").style("width","400px"); //setting width of container0
  select("#container0").style("margin", "0 auto"); //center our container, margin: 0 auto; 0 refers to the top and
  //bottom spacing of our container, the auto refers to the left and right spacing of our container

  //To center our container, you need to set a width and margin: 0 auto;
  cnv.parent("#container0");

  button1 = new hitZoneObject(100,200,50,"red","Stop Button",loadImage("assets/stop.png"));
  button2 = new hitZoneObject(200,200,50,"green","Play Button",loadImage("assets/play.png"));

  cowVid.hide();
}

function draw() {
  // put drawing code here
  background(255);

  button1.display();
  button1.check();
  console.log("button1 overlay " + button1.overlay);
  button2.display();
  button2.check();
}

function mousePressed() {
  if (button1.overlay == true) {
    console.log(button1.label);
    soundFile.stop();
    cowVid.stop();
    cowVid.hide();
  }
  if (button2.overlay == true) {
    console.log(button2.label);
    soundFile.stop();
    soundFile.play();
    cowVid.style("display", "inline-blocK"); //puts html elements next to each other
    //cowVid.position(200,200);
    cowVid.show();
    cowVid.play();
  }
}

class hitZoneObject {

  constructor(tempX,tempY,tempSize,tempColor,tempLabel,tempImage) {
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempSize;
    this.boxColor = tempColor;
    this.label = tempLabel;
    this.image = tempImage;
  }

  display() {
    fill(this.boxColor);
    //rect(this.x,this.y,this.boxSize,this.boxSize);
    image(this.image,this.x,this.y,this.boxSize,this.boxSize);
    text(this.label,this.x,this.y-20);

    if (this.overlay == true) {
      fill(127,127);
      rect(this.x,this.y,this.boxSize,this.boxSize);
    }
  }

  check() {
    if(mouseX > this.x && mouseX < (this.x+this.boxSize)&&mouseY > this.y && mouseY < (this.y + this.boxSize)) {
      console.log("over button " + this.boxColor);
      this.overlay = true;
    } else {
      console.log("off button " + this.boxColor);
      this.overlay = false;
    }
  }

}
