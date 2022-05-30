class Player{
  constructor(){
    this.pos = createVector(sceneW /2, sceneH/2);
    this.vel = createVector();
    this.acc = createVector();
    this.rays = [];
    this.heading = 0;
    for(let a = 0; a < 30 && a > -30; a+= 1) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }
  rotate(angle) {
    this.heading += angle;
    let index = 0
    for(let a = 0; a < 30 && a > -30; a+= 1) {
      this.rays[index].setAngle(radians(a) + this.heading);
      index++;
    }
  }

  move(amt) {
    const vel = p5.Vector.fromAngle(this.heading);
    vel.setMag(amt);
    this.pos.add(vel);

  }
  
  move(amt) {
    const vel = p5.Vector.fromAngle(this.heading + randians(90));
    vel.setMag(amt);
    this.pos.add(vel);

  }

  update(x, y) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    // this.pos.set(x,y);
  }

  look(walls) {
    const scene = [];
    for(let i = 0; i < this.rays.length; i++){
      const ray = this.rays[i];
      let closest = null;
      let record = Infinity;
      for(let wall of walls) {
        let pt = ray.cast(wall);
        stroke(255, 0, 0, 25);
        if(pt){
          const d = p5.Vector.dist(this.pos, pt)
          if(d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
      scene[i] = record;
    }
    return scene;
  }
  render(){
    fill(255);
    ellipse(this.pos.x,this.pos.y,10)
    for(let ray of this.rays){
      //ray.render();
    }
  }
  run() {
    this.render();
  }
}
