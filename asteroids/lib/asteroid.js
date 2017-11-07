const MovingObject = require("./moving_objects");
const Util = require("./util");

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 4
};

const Asteroid = function Asteroid(options = {}) {
  options.color = DEFAULTS.COLOR;
  options.pos = options.pos;
  options.radius = DEFAULTS.RADIUS;
  options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);

  MovingObject.call(this, options);

};

Util.inherits(Asteroid, MovingObject);



module.exports = Asteroid;
