var BikeContainer = require('../src/bikeContainer.js');
var Bike = require('../src/bike.js');

describe ('BikeContainer', function(){

  beforeEach(function(){
    container = new BikeContainer();
    bike = new Bike();
  });

  it('can accept bikes', function(){
    container.dock(bike);
    expect(container.bikes.length).toEqual(1);
  });

  it('can release bikes', function(){
    container.dock(bike);
    container.release();
    expect(container.bikes.length).toEqual(0)
  });

  it('should provide a list of available bikes', function(){

  });

});