var hrs, sec, min, hrsAngle, secAngle, minAngle;
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");
  translate(200,200);
  rotate(-90)

  hrs= hour();
  sec= second();
  min= minute();

  secAngle=map(sec, 0, 60, 0, 360);
  hrsAngle=map(hrs%12, 0, 12, 0, 360);
  minAngle=map(min, 0, 60, 0, 360);
  
  seconds();
  noFill();
  stroke(255,0,0);
  strokeWeight(7);
  arc(0,0,300,300,0,secAngle);

  noFill();
  stroke(0,0,255);
  strokeWeight(7);
  arc(0,0,260,260,0,hrsAngle);

  noFill();
  stroke(0,255,0);
  strokeWeight(7);
  arc(0,0,280,280,0,minAngle);
  
  drawSprites();
  minutes();
  hours();
}

function seconds() {
  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
}

function minutes() {
  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
}

function hours() {
  push();
  rotate(hrsAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
}