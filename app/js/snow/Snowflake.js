import {randomize} from './randomize';

export class Snowflake {
	constructor(width, height, context) {
		this.canvascontext = context;
		this.canvasWidth   = width;
		this.canvasHeight  = height;
		this.x             = randomize(0, this.canvasWidth);
		this.y             = randomize(-this.canvasHeight, 0);
		this.radius        = randomize(0.5, 3.0);
		this.ySpeed        = randomize(1, 3);
		this.xSpeed        = randomize(-0.5, 3.0);
		this.isResized     = false;
	}

	draw() {
		this.canvascontext.beginPath();
		this.canvascontext.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		this.canvascontext.fillStyle = '#fff';
		this.canvascontext.fill();
		this.canvascontext.closePath();
	}

	update() {
		this.y += this.ySpeed;
		this.x += this.xSpeed;
		if (this.y > this.canvasHeight) {
			if (this.isResized) {
				this.updatePosition();
				this.isResized = false;
			}
			else {
				this.y = 0 - this.radius;
				this.x = randomize(0, this.canvasWidth);
			}
		}
	}

	setCanvasSize(width, height) {
		this.canvasWidth  = width;
		this.canvasHeight = height;
	}

	updatePosition() {
		this.x = randomize(0, this.canvasWidth);
		this.y = randomize(-this.canvasHeight, 0);
	}

	resize() {
		this.isResized = true;
	}
}
