// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
// red panda image "panda" by Mathias Appel is licensed under CC0 1.0 https://search.creativecommons.org/photos/d58a0601-f8fd-4abf-8b26-1f398abb2775
// peacock image "peacock" by Mathias Appel is licensed under CC0 1.0  https://search.creativecommons.org/photos/880ea6f8-6516-4954-96de-fcd250c3ddf6
// butterfly image "DSC_9698.jpg" by bobosh_t is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/4547c832-a15d-41d6-9eb6-36e2555209cc

var puppy, dinosaur, sloth, panda, peacock, butterfly;
var pButton, dButton, sButton, pandaButton, peacockButton, butterflyButton;

var currentImage = 0;


function preload(){
  // load media
  puppy = loadImage("images/cat photo.jpg");
  dinosaur = loadImage("images/dinosaur.jpg");
  sloth = loadImage("images/sloth.jpg");
  panda = loadImage("images/red panda.jpg");
  peacock = loadImage("images/peacock.jpg");
  butterfly = loadImage("images/butterfly.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);

  pButton = createButton("Kitten");
  pButton.mousePressed(function(){
    currentImage = 0;
  });

  dButton = createButton("Dinosaur");
  dButton.mousePressed(function(){
    currentImage = 1;
  });

  sButton = createButton("Sloth");
  sButton.mousePressed(function(){
    currentImage = 2;
  });

  pandaButton = createButton("Red Panda");
  pandaButton.mousePressed(function(){
    currentImage = 3;
  });

  peacockButton = createButton("Peacock");
  peacockButton.mousePressed(function(){
    currentImage = 4;
  });

  butterflyButton = createButton("Butterfly");
  butterflyButton.mousePressed(function(){
    currentImage = 5;
  })
}

function draw() {
  // put drawing code here
  background(255);
  console.log("currentImage " + currentImage);

  if(currentImage == 0){
    // show puppy
    image(puppy,0,0,puppy.width/4, puppy.height/4);
  }else if(currentImage == 1){
    // show dino
    image(dinosaur,0,0,dinosaur.width/4,dinosaur.height/4);
  }else if(currentImage == 2){
    //show sloth
    image(sloth,0,0,sloth.width/4,sloth.height/4);
  }else if (currentImage == 3){
    //show panda
    image(panda,0,0,panda.width/4,panda.height/4);
  }else if(currentImage == 4){
    //show peacock
    image(peacock,0,0,peacock.width/4,peacock.height/4);
  }else if (currentImage == 5){
    //show Butterfly
    image(butterfly,0,0,butterfly.width/4,butterfly.height/4);

  }



}
