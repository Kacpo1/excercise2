function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  background(0,0,0);
}

function draw() {
translate(width/2,height/2);
scale(2);
stroke(lerpColor(color(255,0,0), color(255,255,255), frameCount/100));
line(100*cos(frameCount*2),100*sin(frameCount*2),100,0);
 
  if (frameCount >= 180){
    noLoop();}
  }