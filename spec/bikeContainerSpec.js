var BikeContainer = require('../src/bikeContainer.js');
var Bike = require('../src/bike.js');
var _ = require('underscore')._;

describe ('BikeContainer', function(){

  var dockBrokenBike, bike, bike2, bike3, container  

  beforeEach(function(){
    container = new BikeContainer();
    bike = new Bike();
    bike2 = new Bike();
  });

   dockBrokenBike = function () {
      bike3 = new Bike();
      bike3.break();
      container.dock(bike3);
  };

  dockTenBikes = function(){
    var i = 0;
    while(i < 10){
      bike = new Bike();
      container.dock(bike);
      i++;
    }
  };


  it('can accept bikes', function(){
    container.dock(bike);
    expect(container.bikeCount()).toEqual(1);
  });

  it('can release bikes', function(){
    container.dock(bike);
    container.release();
    expect(container.bikeCount()).toEqual(0)
  });

  it('knows how many bikes it contains', function(){
    dockBrokenBike();
    container.dock(bike);
    container.dock(bike2);
    expect(container.bikeCount()).toEqual(3);
  });

  it('knows when it is full', function(){
    dockTenBikes();
    expect(container._isFull()).toBe(true);
  });

  it('should not accept more bikes when it is full', function(){
    dockTenBikes();
    container.dock(bike2);
    expect(container.bikeCount()).toEqual(10);

  });

  it('should provide a list of broken bikes', function(){
    dockBrokenBike();
    container.dock(bike);
    expect(container.brokenBikes().length).toEqual(1);
  });

  it('should provide a list of available bikes', function(){
    dockBrokenBike();
    container.dock(bike);
    container.dock(bike2);
    expect(container.availableBikes().length).toEqual(2);
  });

});