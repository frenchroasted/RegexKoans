describe("Beginning To End", function() {

  it('^ anchors RegEx to beginning of the string', function() {
    expect( 'dog cat pony' ).not.toMatch(/^cat/);    // This one already works

    expect( 'dog cat pony' ).toMatch(/^dog/);        // Fix this one so it passes
  });

  it('$ anchors RegEx to the end of the string', function() {
    expect( 'dog cat pony' ).not.toMatch(/cat$/);  // This one already works

    expect( 'dog cat pony' ).toMatch(/pony$/);      // Fix this one so it passes
  });

  it('use both to match the entire input', function() {
    expect( 'dog cat pony' ).not.toMatch(/^cat$/);  // This one already works

    expect( 'dog cat pony' ).toMatch(/^dog cat pony$/);      // Fix this one so it passes
  });

  it('a RegEx without any anchors will match a substring anywhere in the input', function() {
    // try using "bc" in the RegEx

    expect( 'abcd' ).toMatch(/bc/);
  });

});
