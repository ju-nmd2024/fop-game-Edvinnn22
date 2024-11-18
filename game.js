function setup() {
  createCanvas(600, 800);
  //resetGame();
}

//GAME VARIABLES
let gameState = "start";
let starX = [];
let starY = [];
let starAlpha = [];
let width = 800;
let height = 800;
const screenHeight = 600;
const screenWidth = 600;

//OBJECT VARIABLES
let r2d2Settings = {
  r2d2X: screenWidth / 2,
  r2d2Y: screenHeight / 3,
  size: 0.5,
  velocityY: 0.2,
  velocityX: 0.2,
  acceleration: 0.2,
  fuel: 100,
};

// STARRY NIGHT
for (let i = 0; i < 300; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
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
  noStroke();
  //background(20, 28, 58);
  landerBackground();

  push();
  fill(230, 0, 0);
  translate(0, 80);
  textSize(60);
  textAlign(CENTER);
  text("ECLIPTICA", screenWidth / 2, screenHeight / 3);

  pop();

  push();
  stroke(0);
  strokeWeight(3);
  translate(60, 70);
  rotate(12);

  push();
  fill(70, 255, 0);

  rect(55, 150, 20, 450, 20);
  pop();
  push();
  fill(180);
  rect(75, 540, 10, 50);
  pop();
  fill(20, 20, 20);
  rect(52, 500, 26, 150, 0, 0, 20);
  rect(52, 630, 26, 0);

  rect(52, 580, 26, 0);
  rect(52, 530, 26, 0);

  rect(52, 545, 26, 0);
  rect(52, 555, 26, 0);
  rect(52, 570, 26, 0);

  pop();

  push();
  stroke(0);
  strokeWeight(3);
  fill(255);
  translate(450, 40);
  rotate(7);
  push();
  fill(0, 0, 255);
  rect(55, 150, 20, 450, 20);
  pop();
  fill(70, 255, 0);

  rect(55, 150, 20, 450, 20);
  push();
  fill(180);
  rect(45, 540, 10, 50);
  pop();
  fill(20, 20, 20);
  rect(52, 500, 26, 150, 0, 0, 20);
  rect(52, 630, 26, 0);

  rect(52, 580, 26, 0);
  rect(52, 530, 26, 0);

  rect(52, 545, 26, 0);
  rect(52, 555, 26, 0);
  rect(52, 570, 26, 0);

  pop();

  push();
  fill(200, 10, 0);
  translate(0, 150);
  textSize(25);
  textAlign(CENTER);
  text("Press ENTER to start", screenWidth / 2, screenHeight / 3);
  pop();
}

//background starry sky
function landerBackground() {
  push();
  noStroke();
  background(0);
  for (let index in starX) {
    fill(255, 255, 255, Math.abs(sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
  pop();
}

/*function resetGame() {
  r2d2Settings.acceleration = 0.2;
  r2d2Settings.fuel = 100;
  r2d2Settings.r2d2Y = screenHeight / 3;
  r2d2Settings.r2d2X = screenWidth / 2;
  r2d2Settings.size = 0.5;
  //r2d2Settings.velocityX = 0.2;
  r2d2Settings.velocityY = 0.2;
}*/

function gameScreen() {
  landerBackground();

  push();
  fill(226, 136, 34);
  translate(20, 30);
  textSize(16);
  textAlign(LEFT);
  text("Fuel:" + Math.floor(r2d2Settings.fuel) + "%", 10, 20);
  pop();

  push();
  fill(128);
  rect(200, 600, 200, 400, 0, 0);
  ellipse(300, 660, 600, 100);
  ellipse(300, 600, 600, 100);
  noStroke();
  rect(1, 600, 700, 60);
  pop();

  push();
  fill(128);
  ellipse(300, 600, 600, 100);
  pop();

  push();
  fill(120);
  ellipse(300, 600, 540, 70);
  pop();

  push();
  fill(60);
  ellipse(300, 600, 100, 20);
  fill(110, 0, 0);
  ellipse(300, 600, 40, 8);
  pop();

  push();
  translate(0, -270);
  r2d2(r2d2Settings.r2d2X, r2d2Settings.r2d2Y, r2d2Settings.size);
  pop();

  // Out of fuel condition
  if (r2d2Settings.fuel <= 0 && r2d2Settings.velocityY > 0) {
    r2d2Settings.fuel = 0;
  }
}

function resultScreen() {
  noStroke();
  //background(18, 16, 32);
  landerBackground();

  //RESTART BUTTON
  fill(0, 0, 230);

  push();
  stroke(0);
  strokeWeight(3);
  translate(60, 70);
  rotate(12);

  push();
  fill(255, 15, 0);

  rect(55, 150, 20, 450, 20);
  pop();
  push();
  fill(180);
  rect(75, 540, 10, 50);
  pop();
  fill(20, 20, 20);
  rect(52, 500, 26, 150, 0, 0, 20);
  rect(52, 630, 26, 0);

  rect(52, 580, 26, 0);
  rect(52, 530, 26, 0);

  rect(52, 545, 26, 0);
  rect(52, 555, 26, 0);
  rect(52, 570, 26, 0);

  pop();

  push();
  stroke(0);
  strokeWeight(3);
  fill(255);
  translate(450, 40);
  rotate(7);
  fill(255, 15, 0);

  rect(55, 150, 20, 450, 20);
  push();
  fill(180);
  rect(45, 540, 10, 50);
  pop();
  fill(20, 20, 20);
  rect(52, 500, 26, 150, 0, 0, 20);
  rect(52, 630, 26, 0);

  rect(52, 580, 26, 0);
  rect(52, 530, 26, 0);

  rect(52, 545, 26, 0);
  rect(52, 555, 26, 0);
  rect(52, 570, 26, 0);

  pop();

  push();
  fill(0, 255, 0);
  translate(0, -100);
  textAlign(CENTER);
  textSize(25);
  text("Press ENTER to restart", screenWidth / 2, screenHeight / 2);
  pop();

  //GAME OVER TEXT
  push();
  fill(230, 0, 0);
  translate(0, -100);
  textAlign(CENTER);
  textSize(90);
  text("GAME OVER", screenWidth / 2, screenHeight / 3);
  pop();

  push();
  fill(0, 230, 0);
  translate(0, -50);
  textAlign(CENTER);
  textSize(35);
  text("R2D2 hit the ground too hard", screenWidth / 2, screenHeight / 3);
  pop();
}

function gameWon() {
  landerBackground();
  push();
  stroke(0);
  strokeWeight(3);
  translate(60, 70);
  rotate(12);

  push();
  fill(220, 0, 255);

  rect(55, 150, 20, 450, 20);
  pop();
  push();
  fill(180);
  rect(75, 540, 10, 50);
  pop();
  fill(20, 20, 20);
  rect(52, 500, 26, 150, 0, 0, 20);
  rect(52, 630, 26, 0);

  rect(52, 580, 26, 0);
  rect(52, 530, 26, 0);

  rect(52, 545, 26, 0);
  rect(52, 555, 26, 0);
  rect(52, 570, 26, 0);

  pop();

  push();
  stroke(0);
  strokeWeight(3);
  fill(255);
  translate(450, 40);
  rotate(7);
  push();
  fill(0, 0, 255);
  rect(55, 150, 20, 450, 20);
  pop();
  fill(255, 180, 0);

  rect(55, 150, 20, 450, 20);
  push();
  fill(180);
  rect(45, 540, 10, 50);
  pop();
  fill(20, 20, 20);
  rect(52, 500, 26, 150, 0, 0, 20);
  rect(52, 630, 26, 0);

  rect(52, 580, 26, 0);
  rect(52, 530, 26, 0);

  rect(52, 545, 26, 0);
  rect(52, 555, 26, 0);
  rect(52, 570, 26, 0);

  pop();

  noStroke();
  push();
  fill(0, 255, 255);
  textSize(50);
  textAlign(CENTER);
  text("YOU LANDED SAFELY!", screenWidth / 2, screenHeight / 3);
  pop();

  push();
  fill(0, 255, 255);
  translate(0, 130);
  textSize(25);
  textAlign(CENTER);
  text("Press ENTER to Exit", screenWidth / 2, screenHeight / 3);
  pop();
}

function gameDie() {
  noStroke();
  landerBackground();

  push();
  stroke(0);
  strokeWeight(3);
  translate(60, 70);
  rotate(12);

  push();
  fill(100, 100, 200);

  rect(55, 150, 20, 450, 20);
  pop();
  push();
  fill(180);
  rect(75, 540, 10, 50);
  pop();
  fill(20, 20, 20);
  rect(52, 500, 26, 150, 0, 0, 20);
  rect(52, 630, 26, 0);

  rect(52, 580, 26, 0);
  rect(52, 530, 26, 0);

  rect(52, 545, 26, 0);
  rect(52, 555, 26, 0);
  rect(52, 570, 26, 0);

  pop();

  push();
  stroke(0);
  strokeWeight(3);
  fill(255);
  translate(450, 40);
  rotate(7);
  push();
  fill(0, 0, 255);
  rect(55, 150, 20, 450, 20);
  pop();
  fill(255, 5, 5);

  rect(55, 150, 20, 450, 20);
  push();
  fill(180);
  rect(45, 540, 10, 50);
  pop();
  fill(20, 20, 20);
  rect(52, 500, 26, 150, 0, 0, 20);
  rect(52, 630, 26, 0);

  rect(52, 580, 26, 0);
  rect(52, 530, 26, 0);

  rect(52, 545, 26, 0);
  rect(52, 555, 26, 0);
  rect(52, 570, 26, 0);

  pop();

  //RESTART BUTTON
  push();
  fill(255, 255, 0);

  textAlign(CENTER);
  textSize(25);
  text("Press ENTER to restart", screenWidth / 2, screenHeight / 2);
  pop();

  //GAME OVER TEXT
  push();
  translate(0, -100);
  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(90);
  text("GAME OVER", screenWidth / 2, screenHeight / 3);
  push();
  translate(0, 100);
  textAlign(CENTER);
  textSize(50);
  text("R2D2 exploded", screenWidth / 2, screenHeight / 3);
  pop();
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
  } else if (gameState === "gameWon") {
    gameWon();
  } else if (gameState === "gameDie") {
    gameDie();
  }

  //IF ENTER CLICK and SPACE thrusting
  if (gameState === "start" && keyCode === ENTER) {
    gameState = "game";
  } else if (gameState === "game" && keyIsDown(32)) {
    r2d2Settings.velocityY = r2d2Settings.velocityY - 0.7;
    //r2d2Settings.velocityX = r2d2Settings.velocityX - 0.7;
    r2d2Settings.fuel -= 2; // Decrease fuel on thrust
  }

  /*if (gameState === "result" && keyCode === ENTER) {
    gameState = "game";
    //resetGame();
  } else if (gameState === "gameDie" && keyCode === ENTER) {
    gameState = "game";
    //resetGame();
  } else if (gameState === "gameWon" && keyCode === ENTER) {
    gameState = "start";
  } */

  if (gameState === "game") {
    //GAME GRAVITY
    r2d2Settings.r2d2Y += r2d2Settings.velocityY;
    r2d2Settings.velocityY += r2d2Settings.acceleration;
  }

  if (r2d2Settings.fuel === 0) {
    gameState = "gameDie";
  }

  //GROUND STOPS R2D2 and GROUND WIN
  if (r2d2Settings.r2d2Y > 730 && r2d2Settings.velocityY > 2.5) {
    gameState = "result";
  } else if (r2d2Settings.r2d2Y >= 730 && r2d2Settings.velocityY <= 2.5) {
    gameState = "gameWon";
  }
}
