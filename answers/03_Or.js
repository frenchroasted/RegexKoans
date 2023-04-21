describe("Or", function() {

  it('pipe character ( | ) is a regex OR', function() {
    const thisPatternWorks = /^dog|cat$/;
    const fixThisPattern   = /^hearts|clubs$/;

    expect( 'dog' ).toMatch(thisPatternWorks);
    expect( 'cat' ).toMatch(thisPatternWorks);

    expect( 'hearts' ).toMatch(fixThisPattern);
    expect( 'clubs'  ).toMatch(fixThisPattern);
  });

});
