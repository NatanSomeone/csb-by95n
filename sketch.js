/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
}

function draw() {
  clear();

  // Put drawings here
  fill(234, 31, 81);
  noStroke();
  rect(50, 50, 250, 250);
  fill(255);
  textAlign(LEFT);
  textStyle(BOLD);
  textSize(140);
  text("p5*", 60, 250);
  textStyle(NORMAL);
  fill(0);
  textAlign(CENTER);
  textSize(25);
  text("johnnnatan", 175, 325);

  let display = touches.length + " touches";
  touches.forEach((t) => {
    circle(t.x, t.y, 50);
  });

  text(`${accelerationX.toFixed(2)}`, 175, 235);
}
let value = 0;
function deviceMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
