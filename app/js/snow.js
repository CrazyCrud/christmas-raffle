import {Snowflake} from './snow/Snowflake';

let canvas         = null;
let canvasContext  = null;
let canvasWidth    = null;
let canvasHeight   = null;
let animationFrame = null;
let snowflakes     = [];

export default function (numberOfSnowflakes = 200) {
	initCanvas();
	createSnowflakes(numberOfSnowflakes);
	animateSnowflakes();
}

function initCanvas() {
	canvas        = document.getElementById('snow');
	canvasContext = canvas.getContext('2d');
	canvasWidth   = canvasContext.canvas.width = canvas.offsetWidth;
	canvasHeight = canvasContext.canvas.height = canvas.offsetHeight;
	animationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame;
}

function createSnowflakes(numberOfSnowflakes) {
	for (let i = 0; i < numberOfSnowflakes; i++) {
		snowflakes.push(new Snowflake(canvasWidth, canvasHeight, canvasContext));
	}
}

function draw() {
	// draw the snowflakes
	canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
	for (let snowflake of snowflakes) {
		snowflake.draw();
	}
}

function update() {
	// update the position of each snowflake
	for (let snowflake of snowflakes) {
		snowflake.update();
	}
}

function animateSnowflakes() {
	draw();
	update();
	animationFrame(animateSnowflakes);
}

window.onresize = function () {
	canvasWidth = canvasContext.canvas.width = canvas.offsetWidth;
	canvasHeight = canvasContext.canvas.height = canvas.offsetHeight;

	for (var i = 0; i < snowflakes.length; i++) {
		snowflakes[i].setCanvasSize(canvasWidth, canvasHeight);
		snowflakes[i].resize();
	}
};