var BikeContainer = require('../src/bikeContainer.js');
var Van = require('../src/van.js');
var Bike = require('../src/bike.js');
var _ = require('underscore')._;

describe ('Van', function(){

  var van, bike, dockFourBikes;

  beforeEach(function(){
    van = new Van();
    bike = new Bike();
  });

  dockFourBikes = function(){
    var i = 0;
    while(i < 4){
      bike = new Bike();
      van.dock(bike);
      i++;
    }
  };

  it('can accept bikes', function(){
    van.dock(bike);
    expect(van.bikeCount()).toEqual(1);
  });

  it('knows when it is full', function(){
    dockFourBikes();
    expect(van._isFull()).toBe(true);
  });

   it('will not dock anymore bikes when it is full', function(){
    dockFourBikes();
    van.dock(bike);
    expect(van.bikeCount()).toEqual(4);
  });

});