let walls = [];
let player;
let wallVertices = [];
let i = 14;

const sceneW = 600;
const sceneH = 600;

function setup() {
  createCanvas(1200, 600);
  loadBoundaries();
  player = new Player();
}

function keyPressed() {
  if(keyCode === 32){
    loadSquare(i);
    i += 4;
  }
}

function draw() {
    if(keyIsDown(LEFT_ARROW)) {
      player.rotate(-0.03);
    } else if (keyIsDown(RIGHT_ARROW)) {
      player.rotate(0.03);
    } else if (keyIsDown(87)) {
      player.move(1);
    } else if (keyIsDown(83)) {
        player.move(-1);
      }

  background(0);

  for(let wall of walls) {
    wall.display();
  }
  player.update(mouseX,mouseY);
  player.run();


  const scene = player.look(walls);

  const w = sceneW / scene.length
  push();
  translate(sceneW, 0);
  for(let i = 0; i < scene.length; i++){
    noStroke();
    const sSq = scene[i] * scene[i];
    const wSq = sceneW * sceneW;
    const b = map(sSq, 0, wSq, 255, 0);
    const h = map(scene[i], 0, sceneW, sceneH, 0)
    fill(b);
    rectMode(CENTER);
    rect(i * w + w /2, sceneH/2, w, h);
  }
  pop();

}
