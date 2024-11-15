//SETUP
function setup() {
  createCanvas(600, 600);
  frameRate(30);
}

//GAME VARIABLES
let isGameActive = true;
let gameState = "start";
//let rocketLanded;
//let landingY = 350;
const screenHeight = 600;
const screenWidth = 600;

let r2d2Settings = {
  r2d2X: screenWidth / 2,
  r2d2Y: screenHeight / 3,
  s: 0.5,
  velocity: 0.4,
  acceleration: 0.2,
};

//R2D2
function r2d2(x, y, s) {
  push();
  translate(x * s, y * s);
  stroke(0, 0, 0);
  strokeWeight(1 * s);

  //ARM SHOULDER

  push();
  fill(0, 0, 255);
  translate(-150 * s, 25 * s);
  rect(x * s, y * s, 300 * s, 20 * s, 5 * s);
  pop();

  push();
  translate(-140 * s, 0 * s);
  rect(x * s, y * s, 280 * s, 70 * s, 10 * s);
  pop();

  //FLAMES LEFT

  push();
  noStroke();
  translate(-115 * s, 260 * s);
  fill(226, 40, 34);
  ellipse(x * s, y * s, 50 * s, 90 * s);
  pop();

  push();
  noStroke();
  translate(-115 * s, 260 * s);
  fill(226, 72, 34);
  ellipse(x * s, y * s, 40 * s, 80 * s);
  pop();

  push();
  noStroke();
  translate(-115 * s, 260 * s);
  fill(226, 88, 34);
  ellipse(x * s, y * s, 30 * s, 70 * s);
  pop();

  push();
  noStroke();
  translate(-115 * s, 260 * s);
  fill(226, 136, 34);
  ellipse(x * s, y * s, 20 * s, 60 * s);
  pop();

  //FLAMES RIGHT
  push();
  noStroke();
  translate(125 * s, 260 * s);
  fill(226, 40, 34);
  ellipse(x * s, y * s, 50 * s, 90 * s);
  pop();

  push();
  noStroke();
  translate(125 * s, 260 * s);
  fill(226, 72, 34);
  ellipse(x * s, y * s, 40 * s, 80 * s);
  pop();

  push();
  noStroke();
  translate(125 * s, 260 * s);
  fill(226, 88, 34);
  ellipse(x * s, y * s, 30 * s, 70 * s);
  pop();

  push();
  noStroke();
  translate(125 * s, 260 * s);
  fill(226, 136, 34);
  ellipse(x * s, y * s, 20 * s, 60 * s);
  pop();

  //LEFT HAND

  push();
  fill(200);
  translate((x - 150) * s, (y + 230) * s);
  rect(0, 0, 70 * s, 20 * s, 5 * s);
  pop();

  push();
  beginShape();
  translate((x - 180) * s, (y + 140) * s);
  vertex(35 * s, 30 * s);
  vertex(85 * s, 30 * s);
  vertex(120 * s, 100 * s);
  vertex(10 * s, 100 * s);
  endShape(CLOSE);
  pop();

  //RIGHT HAND

  push();
  fill(200);
  translate((x + 90) * s, (y + 230) * s);
  rect(0, 0, 70 * s, 20 * s, 5 * s);
  pop();

  push();
  beginShape();
  translate((x + 60) * s, (y + 140) * s);
  vertex(35 * s, 30 * s);
  vertex(85 * s, 30 * s);
  vertex(120 * s, 100 * s);
  vertex(10 * s, 100 * s);
  endShape(CLOSE);
  pop();

  //ARM LENGTH LEFT
  push();
  translate(-130 * s, 70 * s);
  rect(x * s, y * s, 20 * s, 80 * s);
  pop();

  push();
  fill(0, 0, 255);
  translate(-130 * s, 70 * s);
  rect(x * s, y * s, 5 * s, 80 * s);
  pop();
  //ARM LENGTH RIGHT
  push();
  translate(110 * s, 70 * s);
  rect(x * s, y * s, 20 * s, 100 * s);
  pop();

  push();
  fill(0, 0, 255);
  translate(125 * s, 70 * s);
  rect(x * s, y * s, 5 * s, 80 * s);
  pop();

  //ARM WRIST LEFT
  push();
  translate(-135 * s, 150 * s);
  rect(x * s, y * s, 30 * s, 20 * s, 5 * s);
  pop();
  //ARM WRIST RIGHT
  push();
  translate(105 * s, 150 * s);
  rect(x * s, y * s, 30 * s, 20 * s, 5 * s);
  pop();

  //BODY
  push();
  translate(-100 * s, -10 * s);
  rect(x * s, y * s, 200 * s, 200 * s);
  pop();

  //HEAD CIRCLE
  push();
  fill(255);
  arc(x * s, y * s, 200 * s, 250 * s, PI, 0 * s);
  pop();

  //HEAD DECOR

  //CIRCLE HEAD RIGHTSIDE EYE
  push();
  noFill();
  stroke(0);
  translate(50 * s, -70 * s);
  ellipse(x * s, y * s, 35 * s, 35 * s);
  pop();

  //MIDDLE HEAD RECTANGLE WITH RED DOT
  push();
  stroke(0);
  fill(0, 0, 255);
  translate(-20 * s, -65 * s);
  rect(x * s, y * s, 40 * s, 25 * s, 5 * s);
  pop();

  //QUADRANGLE HEAD MIDDLE
  push();
  stroke(0);
  fill(0, 0, 255);
  translate((x - 65) * s, (y - 160) * s);
  quad(50 * s, 45 * s, 40 * s, 90 * s, 90 * s, 90 * s, 80 * s, 45 * s);
  pop();

  //HEAD RED CIRLE MIDDLE
  push();
  stroke(0);
  fill(255, 0, 0);
  translate(0 * s, -52 * s);
  ellipse(x * s, y * s, 15 * s, 15 * s);
  pop();

  //CIRCLE HEAD WHITE MIDDLE
  push();
  stroke(0);
  translate(0 * s, -92 * s);
  ellipse(x * s, y * s, 25 * s, 25 * s);
  ellipse(x * s, y * s, 20 * s, 20 * s);
  pop();

  //HEAD CIRCLE BLACK RIGHTSIDE
  push();
  noStroke();
  fill(0);
  translate(50 * s, -70 * s);
  ellipse(x * s, y * s, 20 * s, 20 * s);
  //HEAD CIRCLE WHITE RIGHTSIDE
  noStroke();
  fill(255, 255, 255);
  ellipse(x * s, y * s, 10 * s, 10 * s);
  pop();

  //RECTANGLES HEAD LEFTSIDE
  push();
  stroke(0);
  fill(0, 0, 255);
  translate(-50 * s, -67 * s);
  rect(x * s, y * s, 15 * s, 30 * s, 3 * s);
  translate(0, 3);
  translate(-20 * s, 0 * s);
  rect(x * s, y * s, 15 * s, 30 * s, 3 * s);
  pop();

  //UNDER CIRCLE BODY
  push();
  fill(255);
  translate(0 * s, 195 * s);
  ellipse(x * s, y * s, 202 * s, 60 * s);
  fill(4, 13, 21);
  ellipse(x * s, y * s, 192 * s, 50 * s);

  //arc(x, y, 200, 70, 0, PI);
  pop();

  //NECK ARC
  push();
  fill(0, 0, 255);
  stroke(0, 0, 0);
  translate(0 * s, -10 * s);
  arc(x * s, y * s, 198 * s, 50 * s, PI, 0 * s);
  pop();

  push();
  translate(0 * s, -6 * s);
  arc(x * s, y * s, 200 * s, 40 * s, PI, 0 * s);
  pop();

  //BODY DECOR'

  push();
  noFill();
  stroke(0, 0, 0);
  push();
  translate((x - 150) * s, (y - 150) * s);
  //RECTANGLS LEFT SIDE
  strokeWeight(2 * s);
  quad(80 * s, 180 * s, 80 * s, 315 * s, 55 * s, 325 * s, 55 * s, 195 * s);
  quad(80 * s, 135 * s, 80 * s, 175 * s, 55 * s, 190 * s, 55 * s, 150 * s);
  pop();

  //SMALL RECTANGLES LEFT SIDE
  push();
  strokeWeight(2 * s);
  translate((x - 150) * s, (y - 135) * s);
  quad(75 * s, 190 * s, 75 * s, 180 * s, 60 * s, 190 * s, 60 * s, 200 * s);
  translate(0 * s, 20 * s);
  quad(75 * s, 190 * s, 75 * s, 180 * s, 60 * s, 190 * s, 60 * s, 200 * s);
  translate(0 * s, 20 * s);
  quad(75 * s, 190 * s, 75 * s, 180 * s, 60 * s, 190 * s, 60 * s, 200 * s);
  translate(0 * s, 20 * s);
  quad(75 * s, 190 * s, 75 * s, 180 * s, 60 * s, 190 * s, 60 * s, 200 * s);
  translate(0 * s, 20 * s);
  quad(75 * s, 190 * s, 75 * s, 180 * s, 60 * s, 190 * s, 60 * s, 200 * s);
  translate(0 * s, 20 * s);
  quad(75 * s, 190 * s, 75 * s, 180 * s, 60 * s, 190 * s, 60 * s, 200 * s);
  pop();

  //RECTANGLE RIGHT SIDE
  push();
  strokeWeight(2 * s);
  translate((x + 15) * s, (y - 150) * s);
  quad(80 * s, 150 * s, 80 * s, 325 * s, 55 * s, 315 * s, 55 * s, 135 * s);
  pop();

  //ARCS IN THE MIDDLE
  push();
  noStroke();
  //translate(x - 150, y - 150);

  //ELLIPSE BLUE 1
  push();
  fill(0, 0, 255);

  ellipse(x * s, y * s, 130 * s, 30 * s);
  pop();

  //ELLIPSE WHITE 1
  push();
  fill(255, 255, 255);
  translate(0 * s, 8 * s);
  ellipse(x * s, y * s, 130 * s, 30 * s);
  pop();

  //ELLIPSE BLUE 2
  push();
  fill(0, 0, 255);
  translate(0 * s, 16 * s);
  ellipse(x * s, y * s, 130 * s, 30 * s);
  pop();

  //ELLIPSE WHITE 2
  push();
  fill(255, 255, 255);
  translate(0 * s, 24 * s);
  ellipse(x * s, y * s, 130 * s, 30 * s);
  pop();

  //ELLIPSE BLUE 3
  push();
  fill(0, 0, 255);
  translate(0 * s, 32 * s);
  ellipse(x * s, y * s, 130 * s, 30 * s);
  pop();

  //ELLIPSE WHITE 3
  push();
  fill(255, 255, 255);
  translate(0 * s, 40 * s);
  ellipse(x * s, y * s, 130 * s, 30 * s);
  pop();

  pop();

  //MIDDLE DECOR
  push();
  strokeWeight(2 * s);
  translate((x - 15) * s, (y - 150) * s);
  quad(80 * s, 255 * s, 80 * s, 314 * s, 65 * s, 311 * s, 65 * s, 250 * s);
  pop();

  push();
  strokeWeight(2 * s);
  translate((x - 130) * s, (y - 150) * s);
  quad(80 * s, 200 * s, 80 * s, 311 * s, 65 * s, 314 * s, 65 * s, 205 * s);
  pop();

  push();
  strokeWeight(2 * s);
  translate((x - 40) * s, (y + 85) * s);
  rect(0 * s, 0 * s, 78 * s, 75 * s, 2 * s);
  pop();

  push();
  strokeWeight(2 * s);
  translate((x - 25) * s, (y + 45) * s);
  rect(0 * s, 0 * s, 50 * s, 40 * s, 2 * s);
  pop();

  strokeWeight(2 * s);
  push();
  translate(x * s, (y + 55) * s);
  ellipse(0 * s, 0 * s, 38 * s, 5 * s);
  pop();

  push();
  translate(x * s, (y + 65) * s);
  ellipse(0 * s, 0 * s, 38 * s, 5 * s);
  pop();

  push();
  translate(x * s, (y + 75) * s);
  ellipse(0 * s, 0 * s, 38 * s, 5 * s);
  pop();

  //BLUE CIRCLE BODY
  push();
  translate(150 * s, 150 * s);
  push();
  translate((x - 151) * s, (y - 27) * s);
  fill(0, 0, 255);
  ellipse(0 * s, 0 * s, 60 * s, 60 * s);
  pop();

  push();
  translate((x - 151) * s, (y - 27) * s);
  fill(255, 255, 255);
  ellipse(0 * s, 0 * s, 50 * s, 50 * s);
  pop();

  push();
  translate((x - 151) * s, (y - 27) * s);
  fill(0, 0, 255);
  ellipse(0 * s, 0 * s, 40 * s, 40 * s);
  pop();

  push();
  translate((x - 151) * s, (y - 27) * s);
  fill(255, 0, 0);
  ellipse(0 * s, 0 * s, 20 * s, 20 * s);
  pop();

  pop();

  pop();
}

function startScreen() {
  background(87, 13, 176);
  push();
  translate(0, 150);
  fill(230);
  textSize(20);
  textAlign(CENTER);
  text("Click to start", screenWidth / 2, screenHeight / 3);
  pop();

  /*if (
    mouseX >= rectX &&
    mouseX <= rectX + rectWidth &&
    mouseY >= rectY &&
    mouseY <= rectY + rectHeight
  ){

  }*/
}

function gameScreen() {
  background(0, 255, 0);
  r2d2(r2d2Settings.r2d2X, r2d2Settings.r2d2Y, r2d2Settings.s);
}

function gameWon() {
  push();
  fill(255, 255, 255);
  textSize(30);
  textFont();
  textAlign(CENTER);
  text("YOU LANDED!", screenWidth / 2, screenHeight / 3);
  pop();
}

function resultScreen() {
  noStroke();

  //RESTART BUTTON

  push();
  fill(230);
  translate(0, -40);
  textAlign(CENTER);
  textSize(20);
  text("Restart", screenWidth / 2, screenHeight / 2);
  pop();

  //EXIT BUTTON

  push();
  translate(0, 110);
  fill(230);
  textAlign(CENTER);
  textSize(20);
  text("EXIT", screenWidth / 2, screenHeight / 3);
  pop();

  //GAME OVER TEXT
  push();
  translate(0, -100);
  fill(255);
  textAlign(CENTER);
  textSize(90);
  text("GAME OVER", screenWidth / 2, screenHeight / 3);
  pop();
}

function draw() {
  //GAME STATES
  if (gameState === "start") {
    startScreen();
  } else if (gameState === "game") {
    gameScreen();
  } else if (gameState === "result") {
    resultScreen();
  } else if (gameState === "Won") {
    gameWon();
  }

  //BUTTONS
  if (mouseIsPressed) {
    if (mouseX >= 245 && mouseX <= 355 && mouseY >= 335 && mouseY <= 350) {
      gameState = "game";
    }
  }

  if (mouseIsPressed) {
    if (mouseX >= 280 && mouseX <= 320 && mouseY >= 295 && mouseY <= 310) {
      gameState = "start";
    }
  }

  if (mouseIsPressed) {
    if (mouseX >= 270 && mouseX <= 335 && mouseY >= 245 && mouseY <= 260) {
      gameState = "game";
    }
  }

  /*if (keyIsPressed === true && keyCode === 32) {
      gameState = "game";
    }*/

  if (isGameActive) {
    if (gameState === "game") {
      r2d2Settings.acceleration += 0.1;
      if (keyIsDown(32)) {
        r2d2Settings.velocity -= 0.1;
      }

      r2d2Settings.r2d2Y += r2d2Settings.velocity;
      r2d2Settings.velocity = r2d2Settings.acceleration;
      if (r2d2Settings.r2d2Y > 600) {
        if (r2d2Settings.velocity > 1.5) {
          gameState = "result";
          r2d2Settings.r2d2Y = 80;
          r2d2Settings.velocity = 0.1;
          r2d2Settings.acceleration = 0;
        } else if (r2d2Settings.velocity <= 1.5) {
          gameState = "won";

          //result = "r2d2 made it alive";
          //r2d2Landed = true;
          //isGameActive = false;
          //gameState = "result";
        }
      }
    }
  }
}
