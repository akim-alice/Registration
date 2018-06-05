
describe ('Calculate program', function (){

  describe ('Calculate addition', function(){
    it ('It should be able to add two numbers', function(){
      expect(calculate.add(3,4)).toBe(7)
    });
  });

  describe ('Calculate subraction', function(){
    it ('It should be able to subract two numbers', function(){
      expect(calculate.subtract(15, 4)).toBe(11)
    });
  });

  describe ('Calculate multiplication', function(){
    it ('It should be able to multiply two numbers', function(){
      expect(calculate.multiply(5, 3)).toBe(15)
    });
  });

  describe ('Calculate division', function(){
    it ('It should be able to divide two numbers', function(){
      expect(calculate.divide(16, 4)).toBe(4)
    });
  });

  describe ('Calculate square', function(){
    it ('It should be able to square a number', function(){
      expect(calculate.square(3)).toBe(9)
    });
  });

  describe ('Get modulus', function(){
    it ('It should be able to the modulus of two divided numbers', function(){
      expect(calculate.modulus(13,6)).toBe(1)
    });
  });
});
