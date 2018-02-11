describe("Basics", function() {

	it('replace /^a$/ with /^___$/ to make RegEx match', function() {
		expect('a').toMatch(/^a$/);
	});

	it('a RegEx that is the same as the string will match', function() {
		expect('abcd').toMatch(/^abcd$/);
	});

	it('RegEx is case sensitive', function() {
		expect('AbCd').toMatch(/^AbCd$/);
	});

	it('whitespace matters', function() {
		expect('ab cd').toMatch(/^ab cd$/);
	});

	it('testing for does-not-match is often useful, too', function() {
		expect('abcd').not.toMatch(/^bcd$/);
	});

});
