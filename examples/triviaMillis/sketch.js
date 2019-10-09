var questions = ["Is iceland always covered in ice?", "What ocean lies east of the US?"];
var options = ["1) True 2) False", "1) Pacific 2) Eastern 3) Indian 4) Atlantic"];
var answers = [2, 4];

var buttons = [];

var answerText = "";

var startTimer = false;
var interval = 5000;
var prevMillis = 0;

var currentOption = -1;
var currentQuestion = 0;

function setup() {
  // put setup code here
  createCanvas(400,400);

  buttons[0] = createButton("1");
  buttons[0].position(10,300);
  buttons[0].mousePressed(function(){
    currentOption = 0;
  });
  buttons[1] = createButton("2");
  buttons[1].position(50,300);
  buttons[1].mousePressed(function(){
    currentOption = 1;
  });
  buttons[2] = createButton("3");
  buttons[2].position(90,300);
  buttons[2].mousePressed(function(){
    currentOption = 2;
  });
  buttons[3] = createButton("4");
  buttons[3].position(130,300);
  buttons[3].mousePressed(function(){
    currentOption = 3;
  });

}

function draw() {
  // put drawing code here
background(255);

text(questions[currentQuestion],20,100);
text(options[currentQuestion],20,200);

if (startTimer == true) {
  text(answerText,70,400);
  if (millis()-prevMillis > interval) {
    prevMillis = millis();
    startTimer = false;
    console.log("Timer ended");
  }
}

  if (currentOption != -1) {
    if (currentOption+1 == answers[currentQuestion]) {
      console.log("correct");
      answerText = "correct";
      currentQuestion += 1;

      if (currentQuestion == questions.length) {
        currentQuestion = 0;
      }
    }
    else {
      console.log("incorrect");
      answerText = "incorrect";
    }
    //set currentOption to an inactive state so comparison isn't happening when we don't want it
    currentOption = -1;
    startTimer = true;
    prevMillis = millis();
  }
}
