function Bike() {
  this.broken = false;
}

Bike.prototype.isBroken = function() { 
  return this.broken;
};

Bike.prototype.break = function() {
  this.broken = true;
};

Bike.prototype.fix = function() {
  this.broken = false;
};

module.exports = Bike;