var Bike = require('../src/bike.js');

describe('Bike',function(){

 beforeEach(function(){
    bike = new Bike();
  });

  it('should not be broken', function(){
    expect(bike.isBroken()).toBe(false);
  });

  it('should be able to break', function(){
    bike.break();
    expect(bike.isBroken()).toBe(true);
  });

  it('should be able to be fixed', function(){
    bike.break();
    bike.fix();
    expect(bike.isBroken()).toBe(false)
  });


});
