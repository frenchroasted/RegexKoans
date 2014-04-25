describe("Modifiers", function() {

  var ___ = 0;

  it('regular expressions don\'t have to be case-sensitive', function() {
    // In many programming languages, especially those that
    // use the /^whatever$/ pattern syntax, modifiers are single
    // characters that come after the //. 
    // 
    // To make a JavaScript Pattern non-case-sensitive,
    // put "i" after the //.
    // 
    // Note: Some programming languages do not support modifiers like
    // this. These languages typically have a flag that can be set
    // within the pattern string to toggle case-sensitivity. Refer
    // to the language API to see how to make a case-insensitive match
    // in your language.
    
    var fixThisPattern = /^abc$/;
    
    expect( 'abc' ).toMatch(fixThisPattern);
    expect( 'ABC' ).toMatch(fixThisPattern);
    expect( 'AbC' ).toMatch(fixThisPattern);
    
    expect(fixThisPattern.source).not.toMatch(/\[/);
  });
  
  it('match first or match all', function() {
    // //g -> match globally
    // By default, javascript // will match only the
    // first occurrence in the string which satisfies
    // the pattern. //g is useful especially when doing
    // find/replace in the string. We'll cover that in
    // a later Koan.
    // 
    // The JavaScript String.match function returns
    // an array of matches.

    var singleMatch = /x/;
    var globalMatch = /x/g;

    expect( "xxx".match(singleMatch).length ).toEqual(___);
    expect( "xxx".match(globalMatch).length ).toEqual(___);
  });

  it('treat string as multiple lines', function() {
    // //m -> input string is multiple lines, so
    // ^ and $ match begin-end of each line, separated
    // by line feed. ^ and $ match intermediate
    // "lines" within input string

    // Hint: Notice "abc" appears twice in the matching string.
    
    var fixThisPattern = /^abc$/;
    
    var matches = "abc\nabc".match(fixThisPattern);
    
    expect( 'abc\nabc' ).toMatch(fixThisPattern);
    
    expect( matches.length ).toEqual(2);
    expect( matches[0]     ).toEqual("___");
    expect( matches[1]     ).toEqual("___");
    
    expect(fixThisPattern.source).not.toMatch(/n/);
  });

});
