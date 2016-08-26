describe('FizzBuzz Testing', function(){
	it("Should be a string 1. For 1", function(){
		expect(fizzBuzz(1)).toBe(1);
	});
	it("Should be a string 2. For 2.", function(){
		expect(fizzBuzz(2)).toBe(2);
	});
	it("Should be string Fizz for 3", function(){
		expect(fizzBuzz(3)).toBe('Fizz');
	});
	it("Should be Buzz. For 5.", function(){
		expect(fizzBuzz(5)).toBe('Buzz');
	});
	it("Should be FizzBuzz. For 15", function(){
		expect(fizzBuzz(15)).toBe('FizzBuzz');
	});
	// var random = Math.floor(Math.random() * 10) * 15;
	// You could use the above ^ to test random input

});