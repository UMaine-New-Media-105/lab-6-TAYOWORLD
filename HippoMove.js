let bubX,bubY;
let treatX,treatY;
let notGone;
let d; 
function setup() {
  createCanvas(400, 400);
  
  bubX = 50;
  bubY = 50;
  treatX = random(width);
  treatY = random(height);
  notGone = true;

}

function draw() {
  background(220);
  let d = dist(bubX,bubY,treatX,treatY);
  console.log("The distance is: " + d);
  if (d < 20){
   notGone = false
  }

  
  
  catchingBub(bubX,bubY,.5)
  
  goodTreat(treatX,treatY,.8);
  
  
}
function catchingBub(x,y,size){
  push();
  translate(x,y);
  scale(size);
  fill(80,92,124)
 ellipse(0, 0, 100);
 ellipse(46,0, 60);
  pop(); 
}

function goodTreat(x,y,size){
  if (notGone == true){
  push();
  translate(x,y)
  scale(size)
  fill(190,128,255)
  rect(100, 20, 55, 20)
  pop();
  }
}
function keyPressed() {
  if (keyCode === LEFT_ARROW ) {
  bubX = bubX - 5
  } else if (keyCode === RIGHT_ARROW) {
  bubX = bubX + 5 
  } else if (keyCode === UP_ARROW){
  bubY = bubY - 5
  } else if (keyCode === DOWN_ARROW){
  bubY = bubY + 5
  }
    
}
