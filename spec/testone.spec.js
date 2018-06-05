describe('testing login', function(){
	
	describe('username testing', function(){
      it ('It should be able to check if the username entered is correct', function(){
      expect(username).toBe("Akim")
      expect(username).toBe("Linda")
      expect(username).toBe("Mike")
      });
	});

	describe('if username is not right', function(){
	it ('It should be able to detect a wrong username and deny access', function(){
	expect(username).not.toBe("Akim")
	expect(username).not.toBe("Linda")
	expect(usename).not.toBe("Mike")
	  });
	});

	describe('if the password is correct', function(){
		it ('It confirms if the password entered is the correct one', function(){
			expect(password).toBe("Aleez")
			expect(password).toBe("Kadz")
			expect(password).toBe("Micheal")
	  });
	});

	describe('if the password is invalid', function(){
		it ('It denies access if the password entered is invalid', function(){
			expect(password).toBe("aleez")
			expect(password).toBe("kadz")
			expect(password).toBe("Mikael")
	   });
	});

	describe('if both username and password are correct', function(){
		it ('It logins in successfully if both details are entered correctly', function(){
			expect(username, password).toBe("Akim", "Aleez")
			expect(username, password).toBe("Linda", "Kadz")
			expect(username, password).toBe("Mike", "Micheal")
		});
	});
})