let playerImage;
let playerX = 100;

function preload() {
  playerImage = loadImage('spidy.png')

}

function setup() {

  console.log('setup')
  createCanvas(800, 400);
  

}

let x = 50
let speed = 2

function draw() {
  clear()
  console.log('draw')

  //render the player image (x,y,width,height)

  image(playerImage, playerX, 100, 50, 50)


  let lineColor = color(0, 256, 0)
  stroke(lineColor)
  fill('red')
  rect(10, 50, 50, 50)
  fill('blue')
  rect(405, 300, 50, 50)

  //if (x > 685) {

    //speed = - 2

  //} else if (x < 50) {
    //speed = 2}
  //x += speed

  //circle(x, 200, 100)

}

function keyPressed() {
  console.log('key pressed')
  console.log(keyCode)
//move player to the right with right arrow ->
if (keyCode === 39) {
  playerX += 15;

}

}