describe("Looking Ahead", function() {

  const ___ = 0;
  
  // Given all we've learned so far, there are still some surprisingly
  // simple patterns that we cannot match with the tools in the
  // earlier Koans. For example:
  //   * Password must be 6-8 characters and must include a capital letter and a number
  //   * Escape all & in an HTML file (& is a special character and is escaped with &amp;)
  //     but don't escape any & that is already escaped (should not create any &amp;amp;)
  //   * Verify that every IMG tag in an HTML file has an alt attribute and add one
  //     if needed
  // 
  // To solve these problems, a regular expression must be able to, seemingly,
  // fast-forward through the string looking for certain criteria, then rewind
  // back to an earlier point in order to continue the match. Most modern
  // Regular Expression engines can do this. The technical term is:
  //   Zero Width Positive Lookahead Assertion
  // You can also do a Negative Lookahead, for example when evaluating "the string
  // must not contain any numbers".
  // 
  // It is a "Zero Width" assertion because the criteria is evaluated, but then the
  // regular expression engine returns to the point where this assertion was
  // first encountered to continue with the rest of the Regex pattern. You can think
  // of it like matching one character at a time against a Regex pattern, then when
  // one of these lookahead assertions is encountered, you put your finger on the string
  // at that point while you scan ahead to evaluate the lookahead. When the lookahead
  // is complete, and it matches, you return to where your finger is and continue
  // with the rest of the pattern and string.
  // 
  // If the lookahead does not match, then the engine will stop - the Regex is a
  // non-match and it quits right away.
  // 
  // We will solve all the examples given above in Koans below.
  
  // Some examples to show the syntax
  it('match a q that is followed by a u', function() {
    const str1 = 'The quick brown fox jumped over the lazy dog';
    const str2 = 'The other brown fox was from Qatar.';
    
    const lookaheadPattern = /q(?=u)/i;
    
    expect( str1 ).toMatch(lookaheadPattern);
    expect( str2 ).not.toMatch(lookaheadPattern);
    
    expect(1).toEqual(2); // remove this line to continue the tutorial
  });
  
  // The Koan above could easily be matched with a pattern without any lookahead
  // features: /qu/ would do the trick. So when are lookahead operations useful?
  // Answer: When the string must match more than one criteria and the order of
  // appearance doesn't matter. For example, in a typical password validator
  // that requires both a letter and a number, but it's okay to have a2 or 2a,
  // either is correct. This can still be done without lookahead, but it's much
  // harder because you have to write a Regex for "letter-digit OR digit-letter".
  // This becomes unusably difficult when you add more criteria:
  // "letter-digit-punctuation OR letter-punctuation-digit OR ...
  // This is the kind of problem that makes lookahead so powerful.
  // 
  // Lookahead has another valuable use when used with string replacement, which
  // we'll get to later.
  
  it('verify that the string contains at least one uppercase letter and one number', function() {
    const str1 = 'abcde';
    const str2 = 'a6cD';
    const str3 = 'Abcd9';
    const str4 = '12345';
    
    const fixThisPattern = /___/;
    
    // Hint: Just like any other Regex element, the lookahead element is position-
    // specific. See the "qu" example above: the "u" must be present in exactly
    // the position after the "q". To make the lookahead scan ahead farther into
    // the string, you'll have to incorporate a .*
    
    expect( 'abcde' ).not.toMatch(fixThisPattern);
    
    expect( 'a6cD'  ).toMatch(fixThisPattern);
    expect( 'Abcd9' ).toMatch(fixThisPattern);
    expect( 'X3'    ).toMatch(fixThisPattern);
    
    expect( ''      ).not.toMatch(fixThisPattern);
    expect( '12345' ).not.toMatch(fixThisPattern);
  });
  
  it('validate a password', function() {
    // Requirements:
    //   * Must contain at least one lowercase letter
    //   * Must contain at least one uppercase letter
    //   * Must contain at least one number
    //   * Must be between 6 and 16 characters long
    //   * Any non-whitespace character is allowed
    
    const fixThisPattern = /___/;
    
    expect( 'abcXYZ123'        ).toMatch(fixThisPattern);
    expect( '89ghV.'           ).toMatch(fixThisPattern);
    expect( 'X0aaaaaaaaaaaaaa' ).toMatch(fixThisPattern);
    expect( 'abc123'            ).not.toMatch(fixThisPattern);
    expect( 'aX5##'             ).not.toMatch(fixThisPattern);
    expect( 'abc123XXXXXXXXXXX' ).not.toMatch(fixThisPattern);
    expect( 'abc123 ZZ'         ).not.toMatch(fixThisPattern);
  });
  
  // You can combine lookahead with group captures to solve more interesting
  // problems. This next Koan will require using the negative lookahead:
  //   (?! )
  // Note: The lookahead ( ) does not count as a capture group, so when you
  // count ( ) to get the index of the captured text, you skip the lookahead
  // operators. In fact, any ( ) with a ? like (?someRegexStuff) will not be
  // remembered as a capture group.
  
  it('find the id of every IMG tag without an "alt" attribute', function() {
    // Assume every IMG tag has an id defined
    
    const fixThisPattern = /___/;
    const idGroupIdx = ___;
    
    const matches1 = fixThisPattern.exec( '<img src="pic.jpg" id="my_pic"/>'                        );
    const matches2 = fixThisPattern.exec( '<img src="http://localhost/somepic.gif" id="localPic"/>' );
    const matches3 = fixThisPattern.exec( '<img src="mypic.png" id="hasTitle" alt="My Pic!"/>'      );
    
    expect( matches1[idGroupIdx] ).toEqual('my_pic');
    expect( matches2[idGroupIdx] ).toEqual('localPic');
    
    expect( matches3 ).toBeNull();
  });
  
  it('Escape & in XML/HTML code', function() {
    // Assumptions:
    //   * & is escaped in XML and HTML by entering: &amp;
    //   * If & is already part of an &...; escape sequence, don't escape it
    //   * & escape sequences are always &, followed by some number of letters, then ;
    
    const fixThisPattern = /___/;
    const escaped = '___';
    
    const str1 = 'Strunk & White'.replace(fixThisPattern, escaped);
    const str2 = 'This &amp; is already escaped.'.replace(fixThisPattern, escaped);
    const str3 = '<input type="text" value="You say &quot;Hello&quot;"/>'.replace(fixThisPattern, escaped);
    const str4 = 'Sample code: if (x < y && x^2 > y^2) { println "x is negative" }'.replace(fixThisPattern, escaped);
    
    expect( str1 ).toEqual( 'Strunk &amp; White'                                                       );
    expect( str2 ).toEqual( 'This &amp; is already escaped.'                                           );
    expect( str3 ).toEqual( '<input type="text" value="You say &quot;Hello&quot;"/>'                   );
    expect( str4 ).toEqual( 'Sample code: if (x < y &amp;&amp; x^2 > y^2) { println "x is negative" }' );
  });
  
  it('For every IMG tag, if no alt attribute is present, insert one using the src value', function() {
    // Assumptions:
    //   * Every IMG tag has a "src" attribute with a defined value
    //   * Some IMG tags may already have "alt" attribute. Do not change these strings.
    //   * In real HTML, the inserted "alt" could be anywhere in the tag, but in this
    //     Koan, put it here: <img alt="some alt value" ... />
    
    // Hint: You will need to use $n references to capture groups to solve this
    
    const fixThisPattern = /___/;
    const replacementString = '___';
    
    const str1 = '<img src="pic.jpg"/>'.replace(fixThisPattern, replacementString);
    const str2 = '<img src="trickyPic.jpg"/> src="Not it!" alt="Tricky!"'.replace(fixThisPattern, replacementString);
    const str3 = '<img src="goodPic.jpg" title="Good Pic" alt="Can\'t touch this!"/>'.replace(fixThisPattern, replacementString);
    const str4 = '<img alt="Reverse Order" src="backwards.jpg"/>'.replace(fixThisPattern, replacementString);
    
    expect( str1 ).toEqual( '<img alt="pic.jpg" src="pic.jpg"/>'                                         );
    expect( str2 ).toEqual( '<img alt="trickyPic.jpg" src="trickyPic.jpg"/> src="Not it!" alt="Tricky!"' );
    expect( str3 ).toEqual( '<img src="goodPic.jpg" title="Good Pic" alt="Can\'t touch this!"/>'         );
    expect( str4 ).toEqual( '<img alt="Reverse Order" src="backwards.jpg"/>'                             );
  });

});
