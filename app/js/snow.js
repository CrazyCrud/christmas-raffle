export default function() {
  const canvas = document.getElementById('snow');
  const canvasContext = canvas.getContext('2d');
  let canvasWidth = canvasContext.canvas.width = canvas.offsetWidth;
  let canvasHeight = canvasContext.canvas.height = canvas.offsetHeight;
  const animationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame;
  let snowflakes = [];
}

window.onresize = function() {
  canvasWidth = canvasContext.canvas.width = canvas.offsetWidth;
  canvasHeight = canvasContext.canvas.height = canvas.offsetHeight;

  for (var i = 0; i < snowflakes.length; i++) {
    // resize each snowflake
  }
}

function draw() {
  // draw the snowflakes
}

function update() {
 // update the position of each snowflake 
}

function animateSnow() {
  draw(); 
  update();
  animationFrame(animateSnow);
}
