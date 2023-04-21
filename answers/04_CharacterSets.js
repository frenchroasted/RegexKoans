describe("Character Sets", function() {

  it('use [ ] to allow more than one possible character in this position', function() {
    const workingPattern = /^d[iu]g$/;

    const fixThisPattern = /^sp[iau]n$/;

    expect( 'dig' ).toMatch(workingPattern);
    expect( 'dug' ).toMatch(workingPattern);

    expect( 'spin' ).toMatch(fixThisPattern);
    expect( 'span' ).toMatch(fixThisPattern);
    expect( 'spun' ).toMatch(fixThisPattern);
  });

  it('use - to specify a range of characters inside [ ]', function() {
    const workingPattern = /^[a-c][a-c][0-9]$/;

    const fixThisPattern = /^[A-D][x-z][x-z]$/;

    expect( 'bc3' ).toMatch(workingPattern);
    expect( 'aa8' ).toMatch(workingPattern);

    expect( 'Azy' ).toMatch(fixThisPattern);
    expect( 'Dyy' ).toMatch(fixThisPattern);
    expect( 'Bxx' ).toMatch(fixThisPattern);
  });

  it('since - is a special character inside [ ], you must escape it with backslash', function() {
    const fixThisPattern = /^[1-4][+\-*][2-6]$/;

    expect( '1+2' ).toMatch(fixThisPattern);
    expect( '2-3' ).toMatch(fixThisPattern);
    expect( '4*6' ).toMatch(fixThisPattern);
  });

  it('mixing single characters and ranges is okay', function() {
    const workingPattern = /^[a-zA-Z][a-zA-Z][0-4abc]$/;

    const fixThisPattern = /^#[0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f]$/;

    expect( 'dG2').toMatch(workingPattern);
    expect( 'ZZb').toMatch(workingPattern);

    expect( '#444444' ).toMatch(fixThisPattern);
    expect( '#ffffff' ).toMatch(fixThisPattern);
    expect( '#c0c0c0' ).toMatch(fixThisPattern);
  });

  it('caret negates the character set: "Must Be One Of These" becomes "Must NOT Be One Of These"', function() {
    const workingPattern = /^x[^a-z]z$/;

    const fixThisPattern = /^[0-9][^0-9][0-9]$/;

    expect( 'x3z' ).toMatch(workingPattern);
    expect( 'xYz' ).toMatch(workingPattern);

    expect( '3.2' ).toMatch(fixThisPattern);
    expect( '5 8' ).toMatch(fixThisPattern);
    expect( '3x3' ).toMatch(fixThisPattern);
  });
});
