// JSJSVector -- a Javascript 2D JSVector class

// The class constructor
function JSVector(x = 0, y = 0) {
  // called with two arguments
  this.x = x;
  this.y = y;
}

// Set the magnitude of the JSJSVector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function (mag) {
  let theta = this.getDirection();
  this.x = Math.cos(theta) * mag;
  this.y = Math.sin(theta) * mag;
}

// Get the magnitude of the JSVector using pythagorean theorem
JSVector.prototype.getMagnitude = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y)
}

// Set the angle (direction) of the JSVector,
// retaining the magnitude.
JSVector.prototype.setDirection = function (theta) {
  let mag = this.getMagnitude();
  this.x = Math.cos(theta) * mag;
  this.y = Math.sin(theta) * mag;
}

// Get the direction (angle) of the JSVector
JSVector.prototype.getDirection = function (m = 0) {
    return Math.atan2(this.y, this.x);
}



// Add another JSVector to this JSVector
JSVector.prototype.add = function (v2) {
  this.x += v2.x;//  this.x = this.x + v2.x
  this.y += v2.y;
}

// Subtract another JSVector from this JSVector
JSVector.prototype.sub = function (v2) {
  this.x -= v2.x;
  this.y -= v2.y;
}

// Class method to return a new JSVector that is the sum of two JSVectors
JSVector.addGetNew = function (v1, v2) {
  return new JSVector(v1.x + v2.x, v1.y + v2.y);
}

// Class method to return a new JSVector that is the difference of two JSVectors
JSVector.subGetNew = function (v1, v2) {
  return new JSVector(v1.x - v2.x, v1.y - v2.y);
}

// Multiply this JSVector by a scalar
JSVector.prototype.multiply = function (scalar) {
  this.x *= scalar;
  this.y *= scalar;
}

// Divide this JSVector by a scalar
JSVector.prototype.divide = function (scalar) {
  this.x /= scalar;
  this.y /= scalar;
}

// Normalize this JSVector so that it has a magnitude of 1
JSVector.prototype.normalize = function () {
  let theta = this.getDirection()
  this.x = Math.cos(theta);
  this.y = Math.sin(theta);
  return this;
}

// Limit the magnitude of this JSVector. 
JSVector.prototype.limit = function (lim) {
  if (this.getMagnitude() > lim) { // if mag is larger than lim
    this.setMagnitude(lim); // sets it to lim
  }
}

// Get the distance between this JSVector and another one
JSVector.prototype.dist = function (v2) {
  return Math.sqrt(this.distSquared(v2));
}

// Get square of the distance between this JSVector and another one
JSVector.prototype.distSquared = function (v2) {
  let dx = this.x - v2.x;
  let dy = this.y - v2.y;
  return (dx*dx + dy*dy)
}

// Rotate this JSVector by some number of radians
// using the rotation matrix |  cos   - sin  |
//                           |  sin   + cos  |

JSVector.prototype.rotate = function (angle) {
  let x = this.x;
  let y = this.y;
  let sin = Math.sin(angle);
  let cos = Math.cos(angle);
  
  this.x = x*cos - y*sin;
  this.y = x*sin + y*cos;
  return this;
}


// Get the angle between this JSVector and another one
JSVector.prototype.angleBetween = function (v2) {
  return Math.atan2(this.y - v2.y, this.x - v2.x);
}

// Make a copy of this JSVector
JSVector.prototype.copy = function () {
  return new JSVector(this.x, this.y);
}

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function () {
  return "The mangnitude is " + this.getMagnitude() + " and the angle is " + this.getDirection() + ".";
}
