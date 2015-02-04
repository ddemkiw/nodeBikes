var Bike = require('./bike');
var _ = require('underscore')._;

function BikeContainer(){
  this.bikes = [];
  this.capacity = 10;
}

BikeContainer.prototype.dock = function(bike) {
  if(this._isFull()){
    return this.bikes;
  }else{
  this.bikes.push(bike);
  }
};

BikeContainer.prototype.release = function(bike) {
  this.bikes.splice(bike);
};

BikeContainer.prototype.bikeCount = function(){
  return this.bikes.length;
};

BikeContainer.prototype.brokenBikes = function() {
 var broken = _.filter(this.bikes, function(bike){ return bike.isBroken();});
 return broken;
};

BikeContainer.prototype.availableBikes = function() {
  var readyBikes = _.filter(this.bikes, function(bike){ return !bike.isBroken();});
  return readyBikes;
};

BikeContainer.prototype._isFull = function() {
  return this.capacity === this.bikes.length; 
};

BikeContainer.prototype.transfer = function(bikes, container) {
  var self = this;
 var transferred =  _.each(bikes, function(bike){self.dock(bike); container.release(bike);});
};

module.exports = BikeContainer;