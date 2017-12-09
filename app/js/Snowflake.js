import randomize from 'randomize'; 

export class Snowflake { 
  constructor(canvasWidth, canvasHeight) {
    this.x = randomize(0, canvasWidth);
    this.y = randomize(-canvasHeight, 0);
    this.radius = randomize(0.5, 3.0);
    this.ySpeed = randomize(1, 3);
    this.xSpeed = randomize(-0.5, 3.0);
  }
  
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();
  }
  
  update() {
    this.y += this.ySpeed;
    this.x += this.xSpeed;
  }
}
