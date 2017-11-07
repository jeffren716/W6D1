
const MovingObject = function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
};



MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
};

MovingObject.prototype.move = function(ctx) {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "purple";
  ctx.fillRect(0, 0, 500, 500);

  const mo = new MovingObject(
    { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
  );
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
  mo.move(ctx);
  mo.draw(ctx);
});

module.exports = MovingObject;
