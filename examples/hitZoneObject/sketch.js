var button1;
var button2;

function setup() {
  // put setup code here
  createCanvas(400,400);
  button1 = new hitZoneObject(100,200,50,"red");
  button2 = new hitZoneObject(200,300,50,"pink");
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

class hitZoneObject {

  constructor(tempX,tempY,tempSize,tempColor) {
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempSize;
    this.boxColor = tempColor;
  }

  display() {
    fill(this.boxColor);
    rect(this.x,this.y,this.boxSize,this.boxSize);
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
