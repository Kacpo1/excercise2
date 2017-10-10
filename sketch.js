function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  background(0,0,0);
}

function draw() {
translate(width/2.5,height/2);
stroke(lerpColor(color(255,0,0), color(255,255,255), frameCount/100));
rect(100*cos(frameCount*2),100*sin(frameCount*2),100,0);
stroke(lerpColor(color(255,0,0), color(255,255,255), frameCount/100));
rect(200*cos(frameCount*2),200*sin(frameCount*2),10,10);
stroke(lerpColor(color(255,0,0), color(255,255,255), frameCount/100));
translate(width/10,height/24);
line(10*cos(frameCount*2),10*sin(frameCount*2),10,0);
stroke(lerpColor(color(255,0,0), color(255,255,255), frameCount/100));


 
  if (frameCount >= 180){
    noLoop();}
  }