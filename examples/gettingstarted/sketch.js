function setup() {
  // put setup code here

//Sets the size of the canvas
createCanvas(500,500);
//Sets the color of the canvas
background("green");
background(0); //black
background(255); //white
background(200); //grayscale 0-255 grayish-white
background(255,0,0); //full red
background(0,255,0); //full green
background(0,0,255); //full blue
//background(#fffff); //hexidecimal white
background(127,255,0); //chartreuse

fill(255); //adjusts inner shape color
stroke(0); //adjusts outer shape color (outline)
//ellipse(250, 250, 100, 100);

}

function draw() {
  // put drawing code here
ellipse(100,100,20,20); //left eye
ellipse(140,100,20,20); //right eye

rect(80, 200, 100, 30); //mouth
//rect starts drawing from lefthand corner

strokeWeight(5);
point(30, 27);

line(80,215,180,215); //parameters = (x1, y1, x2, y2)

//console.log("width: " + width);
//console.log("height: " + height);

triangle(width/2, height/2,(width/2)+10,(height/2)+20,(width/2)-10,(height/2)+20);


}
