describe("Basics", function() {

	it('replace /^___$/ with /^a$/ to make RegEx match. We\'ll explain ^ and $ later.', function() {
		expect('a').toMatch(/^___$/);
	});
	
	it('a RegEx that is the same as the string will match', function() {
		expect('abcd').toMatch(/^___$/);
	});
	
	it('RegEx is case sensitive', function() {
		expect('AbCd').toMatch(/^___$/);
	});
	
	it('whitespace matters', function() {
		expect('ab cd').toMatch(/^___$/);
	});
	
	it('testing for does-not-match is often useful, too', function() {
		expect('abcd').not.toMatch(/^abcd$/);
	});

});
