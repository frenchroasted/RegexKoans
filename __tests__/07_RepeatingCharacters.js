describe("Repeating Characters", function() {

  it('use ? to match Zero or One of a character', function() {
    // If a character is optional, follow it with a ?
    // in the pattern
    
    const fixThisPattern = /^___$/;
    
    expect( 'son'   ).toMatch(fixThisPattern);
    expect( 'soon'  ).toMatch(fixThisPattern);
    expect( 'sooon' ).not.toMatch(fixThisPattern);
  });
  
  it('use + to match One Or More of a character', function() {
    const thisPatternWorks = /^so+n$/
    
    const fixThisPattern = /^___$/;
    
    expect( 'son'        ).toMatch(thisPatternWorks);
    expect( 'soon'       ).toMatch(thisPatternWorks);
    expect( 'soooooooon' ).toMatch(thisPatternWorks);
    expect( 'sun'        ).not.toMatch(thisPatternWorks);
    
    expect( 'x y'     ).toMatch(fixThisPattern);
    expect( 'x     y' ).toMatch(fixThisPattern);
    expect( 'xy'      ).not.toMatch(fixThisPattern);
  });
  
  it('use * to match Zero Or More of a character', function() {
    const fixThisPattern = /^___$/;
    
    expect( 'x y'     ).toMatch(fixThisPattern);
    expect( 'x     y' ).toMatch(fixThisPattern);
    expect( 'xy'      ).toMatch(fixThisPattern);
  });
  
  it('use {n} to match a specific count of repeated characters', function() {
    
    const thisPatternWorks = /^xy{3}z$/;
    
    const fixThisPattern = /^___$/;
    
    expect( 'xyyyz' ).toMatch(thisPatternWorks);
    
    expect( '614-555-1234' ).toMatch(fixThisPattern);
    expect( '6145551234'   ).toMatch(fixThisPattern);
    expect( '614-555-123'  ).not.toMatch(fixThisPattern);
    
    expect(fixThisPattern.source).toMatch(/\{/);
  });
  
  it('use {n,m} to match a range number of repeated characters', function() {
    
    const thisPatternWorks = /^xy{2,5}z$/;
    
    const fixThisPattern = /^___$/;
    
    expect( 'xyyyz'   ).toMatch(thisPatternWorks);
    expect( 'xyyz'    ).toMatch(thisPatternWorks);
    expect( 'xyyyyyz' ).toMatch(thisPatternWorks);
    expect( 'xyz'     ).not.toMatch(thisPatternWorks);
    
    expect( '3.1'     ).toMatch(fixThisPattern);
    expect( '3.142'   ).toMatch(fixThisPattern);
    expect( '3.14159' ).not.toMatch(fixThisPattern);
    
    expect(fixThisPattern.source).toMatch(/\{/);
  });
  
  it('use {n,} for "at least n" and {,m} for "not more than m" repeated characters', function() {
    const fixThisPattern = /^___$/;
    
    expect( 'a  b' ).toMatch(fixThisPattern);
    expect( 'a                                                                 b' ).toMatch(fixThisPattern);
    expect( 'a b'  ).not.toMatch(fixThisPattern);
    
    expect(fixThisPattern.source).toMatch(/\{/);
  });
  
  it('repeater characters (?, +, etc.) also work with character sets and shorthand sets like ., backslash-d, etc.', function() {
    // We will try to match a floating point number.
    // Assumptions:
    //   The number must be positive
    //   There must be a whole number part (before the decimal)
    //   There must be a fractional part (after the decimal)
    //   Either or both of these parts may be zero (0)
    
    const fixThisPattern = /^___$/;
    
    expect( '3.14159'     ).toMatch(fixThisPattern);
    expect( '0.9'         ).toMatch(fixThisPattern);
    expect( '12345.67890' ).toMatch(fixThisPattern);
    expect( '777'         ).not.toMatch(fixThisPattern);
    
    expect(fixThisPattern.source).toMatch(/[d\[]/);
    expect(fixThisPattern.source).toMatch(/[*+]/);
    
    // Important Lesson:
    // When writing a regular expression, it is always important to thoroughly
    // define and understand the requirements and assumptions. The regular expression
    // language is very precise. If the requirements are vague or not well-
    // understood, the regex will be unreliable for edge cases.
  });
  
  it('repeater characters are special characters that must be backslash-escaped to match in strings', function() {
    expect( 'x*y=z' ).toMatch(/^___$/);
  });
  
  it('.* can match any amount of anything... except newline', function() {
    
    expect( ''    ).toMatch(/^.*$/);   // here are a couple of free ones for you
    expect( 'jgi493ujitgj8g*##@!uiofg893ign4q389A*(eu89*(#=U*@UJ()()0jijge' ).toMatch(/^.*$/);
    
    expect( '___' ).not.toMatch(/^.*$/);   // fix this string to make the test pass
  });
  
  it('use a character set to match anything, including newline', function() {

    expect( 'The quick brown fox\njumped over the lazy dog.\n' ).toMatch(/^___*$/);

  });
  
  it('repeater characters are NOT special characters when used inside [ ]', function() {
    const fixThisPattern = /^___$/;
    
    expect( 'x*y=z' ).toMatch(fixThisPattern);
    expect( 'x+y=z' ).toMatch(fixThisPattern);
  });
  
  it('Real World: Match a quotation', function() {
    // Assumptions:
    //   The quotation will begin and end with "
    //   The quotation will be a single line (no newlines)
    //   Any other character besides newline may appear in the quotation
    
    const fixThisPattern = /^___$/;
    
    expect( '"Here today, gone tomorrow."'            ).toMatch(fixThisPattern);
    expect( '"Secant, tangent, and cosine. 3.14159!"' ).toMatch(fixThisPattern);
    
    // This example is incomplete and not robust enough for real life.
    // We will learn some techniques to improve it in later Koans.
  });

});
