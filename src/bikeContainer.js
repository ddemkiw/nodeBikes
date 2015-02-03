var Bike = require('./bike');

function BikeContainer(){
  this.bikes = [];
};

BikeContainer.prototype.dock = function(bike) {
  this.bikes.push(bike);
};

BikeContainer.prototype.release = function() {
  this.bikes.shift();
};


module.exports = BikeContainer;