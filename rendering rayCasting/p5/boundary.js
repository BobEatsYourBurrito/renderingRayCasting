class Boundary{
  constructor(pos1,pos2) {
    this.x1 = pos1.x;
    this.y1 = pos1.y;
    this.x2 = pos2.x;
    this.y2 = pos2.y;
    this.weight = 1;

  }
  display() {
    push();
    stroke(255);
    strokeWeight(this.weight);
    line(this.x1,this.y1,this.x2,this.y2);
    pop();
  }
}

function loadBoundaries() {
  wallVertices.push(createVector(0,0));
  wallVertices.push(createVector(sceneW,0));
  wallVertices.push(createVector(sceneW,sceneH));
  wallVertices.push(createVector(0,sceneH));
  walls.push(new Boundary(wallVertices[0],wallVertices[1]));
  walls.push(new Boundary(wallVertices[1],wallVertices[2]));
  walls.push(new Boundary(wallVertices[2],wallVertices[3]));
  walls.push(new Boundary(wallVertices[3],wallVertices[0]));
  // lines
  for(let i = 0; i < 10; i++) {
    wallVertices.push(new createVector(random(sceneW),random(sceneH)));
  }
  for(let j = 4; j < wallVertices.length; j += 2){
    walls.push(new Boundary(wallVertices[j],wallVertices[j+1]));
  }
}

function loadSquare(i) {
  wallVertices.push(createVector(mouseX, mouseY));
  wallVertices.push(createVector(mouseX + 20, mouseY));
  wallVertices.push(createVector(mouseX + 20,mouseY + 20));
  wallVertices.push(createVector(mouseX, mouseY + 20));
  walls.push(new Boundary(wallVertices[i],wallVertices[i+1]));
  walls.push(new Boundary(wallVertices[i+1],wallVertices[i+2]));
  walls.push(new Boundary(wallVertices[i+2],wallVertices[i+3]));
  walls.push(new Boundary(wallVertices[i+3],wallVertices[i]));

}
