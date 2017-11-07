Function.prototype.inherits = function inherits(parent) {
  function Surrogate() {}

  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

// Function.prototype.inherits = function inherits(parent) {
//   this.prototype = Object.create(parent.prototype);
//   this.prototype.constructor = this;
// };

function MovingObject (start, end) {
  this.start = start;
  this.end = end;
}


MovingObject.prototype.whoosh = function(){
  console.log("whoosh");
};

function Ship (name, start, end) {
  this.name = name;
  MovingObject.call(this, start, end);
}
Ship.inherits(MovingObject);

function Asteroid (size, start, end) {
  this.size = size;
  MovingObject.call(this, start, end);

}
Asteroid.inherits(MovingObject);

const a = new Asteroid(9000, 4, 8);
const m = new MovingObject(1, 2);
const s = new Ship("McShip", 5, 7);
