const x = 100;
const y = 100;
const s = 0.3;

function setup() {
  createCanvas(600, 600);
  background(255);
}

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
  translate((x - 250) * s, (y + 130) * s);
  rect(x * s, y * s, 70 * s, 20 * s, 5 * s);
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
  translate((x - 10) * s, (y + 130) * s);
  rect(x * s, y * s, 70 * s, 20 * s, 5 * s);
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
  background(255, 0, 0);
  translate(0, -y);
  push();
  fill(0);
  translate(x + 20, y + 60);
  rect(x, y, 150, 70, 30);
  pop();
  push();
  translate(x + 40, y + 100);
  fill(230);
  textSize(20);
  text("Click to start", x, y);
  pop();

  if (
    mouseIsPressed === true &&
    mouseX >= 200 &&
    mouseX <= 390 &&
    mouseY >= 450 &&
    mouseY <= 635
  ) {
    state = "game";
  }
}

function gameScreen() {
  background(0, 255, 0);

  if (
    mouseIsPressed === true &&
    mouseX >= 200 &&
    mouseX <= 390 &&
    mouseY >= 350 &&
    mouseY <= 435
  ) {
    state = "result";
  }
}

function resultScreen() {
  noStroke();
  background(85, 13, 179);

  push();
  fill(30);
  translate(x, y + 55);
  rect(x, y, 190, 80, 30);
  pop();

  push();
  fill(20);
  translate(x + 5, y + 60);
  rect(x, y, 180, 70, 30);
  pop();

  push();
  translate(x - 170, x - 20);
  fill(255);
  textSize(90);
  text("GAME OVER", x, y);
  pop();

  push();
  translate(x + 60, y + 100);
  fill(230);
  textSize(20);
  text("Restart", x, y);
  pop();

  if (
    mouseIsPressed === true &&
    mouseX >= 200 &&
    mouseX <= 390 &&
    mouseY >= 255 &&
    mouseY <= 335
  ) {
    state = "start";
  }
}

let state = "start";

function draw() {
  background(255);

  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    resultScreen();
  }
}

//BUTTON CLICK LOSING SCREEN

/*function mouseClicked() {
  if (
    state === "start" &&
    mouseIsPressed == true &&
    mouseX >= 200 &&
    mouseX <= 390 &&
    mouseY >= 150 &&
    mouseY <= 235
  ) {
    state = "game";
  } else if (
    state === "game" &&
    mouseIsPressed == true &&
    mouseX >= 200 &&
    mouseX <= 390 &&
    mouseY >= 150 &&
    mouseY <= 235
  ) {
    state = "result";
  } else if (
    state === "result" &&
    mouseIsPressed == true &&
    mouseX >= 200 &&
    mouseX <= 390 &&
    mouseY >= 150 &&
    mouseY <= 235
  ) {
    state = "start";
  }
}
*/
