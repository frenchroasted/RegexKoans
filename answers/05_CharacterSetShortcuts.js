describe("Character Set Shortcuts", function() {

  it('dot (.) matches anything', function() {
    const fixThisPattern = /^d.g$/;

    expect( 'dig' ).toMatch(fixThisPattern);
    expect( 'dug' ).toMatch(fixThisPattern);
    expect( 'd g' ).toMatch(fixThisPattern);
    expect( 'd3g' ).toMatch(fixThisPattern);
    expect( 'd!g' ).toMatch(fixThisPattern);
    expect( 'd(g' ).toMatch(fixThisPattern);

    expect(fixThisPattern.source).toMatch(/\./);
  });

  it('dot (.) matches anything... except line-feed', function() {
    const fixThisPattern = /^d\ng$/;

    expect( 'd\ng' ).toMatch(fixThisPattern);
  });

  it('dot (.) matches dot (.) when used inside [ ]', function() {
    const fixThisPattern = /^3[.]1$/;

    expect( '3.1' ).toMatch(fixThisPattern);
    expect( '3,1' ).not.toMatch(fixThisPattern);
  });

  it('to match a dot (.) outside of [ ], it must be escaped with backslash', function() {
    const fixThisPattern = /\.$/;

    expect( 'Every sentence must end with a period.' ).toMatch(fixThisPattern);
    expect( 'What about questions?' ).not.toMatch(fixThisPattern);
  });

  it('backslash-d matches any digit, like [0-9]', function() {
    // backslash-d is entered like:  \d

    const fixThisPattern = /^\d\d\d\d$/;

    expect( '1234' ).toMatch(fixThisPattern);
    expect( '3281' ).toMatch(fixThisPattern);
    expect( '5555' ).toMatch(fixThisPattern);
    expect( '9329' ).toMatch(fixThisPattern);

    expect(fixThisPattern.source).toMatch(/d/);
  });

  it('backslash-w matches any word character, plus _, like [a-zA-Z0-9_]', function() {
    // Note: \w may behave differently in other programming languages.
    // for example, numbers may or may not be included. Refer to the
    // language Regular Expression or Pattern API before using \w.

    const fixThisPattern = /^\w\w\w$/;

    expect( 'Dog' ).toMatch(fixThisPattern);
    expect( 'cAt' ).toMatch(fixThisPattern);
    expect( '_x_' ).toMatch(fixThisPattern);

    expect(fixThisPattern.source).toMatch(/w/);
  });

  it('backslash-s matches any whitespace character', function() {
    // Whitespace is:
    //   <space>          ( )
    //   tab              (\t)
    //   line feed        (\n)
    //   carriage return  (\r)
    //   form feed        (\f)
    //   vertical tab     (\v)
    // or [ \t\n\r\f\v]

    const fixThisPattern = /^[\s\w][\s\w][\s\w]$/;

    expect( '   '  ).toMatch(fixThisPattern);
    expect( 'x\ny' ).toMatch(fixThisPattern);
    expect( '\t_Z' ).toMatch(fixThisPattern);

    expect(fixThisPattern.source).toMatch(/s/);
  });

  it('backslash-D, backslash-W, backslash-S match non-digit, non-word, and non-whitespace', function() {
    // /\D/ is the same as /[^\d]/
    // /\W/ is the same as /[^\w]/
    // /\S/ is the same as /[^\s]/
    // /\S/ is NOT the same as /[\w\d]/ - why?

    const whatStringFitsThePattern = "***";

    expect( whatStringFitsThePattern ).toMatch(/^[\S][\S][\S]$/);
    expect( whatStringFitsThePattern ).toMatch(/^[^\w\d][^\w\d][^\w\d]$/);
  });

  it('character set shortcuts can be used inside [ ]', function() {
    const fixThisPattern = /^[\w\s][\w\s][\w\s]$/;

    expect( 'Dog' ).toMatch(fixThisPattern);
    expect( ' 2 ' ).toMatch(fixThisPattern);

    expect(fixThisPattern.source).toMatch(/[\\]/);
  });

});
