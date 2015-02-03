var BikeContainer = require('./bikeContainer');
var _ = require('underscore')._;

function Van() {
 BikeContainer.call(this);
 this.capacity = 4; 
}

Van.prototype = Object.create(BikeContainer.prototype);
Van.prototype.constructor = Van; 

module.exports = Van;