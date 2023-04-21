describe("Capturing Groups", function() {

  const ___ = 0;
  
  // In most languages and editors that support regular expressions,
  // ( ) are used for more than just grouping sequences of characters
  // in the regex. Each ( ) group is remembered and the characters that
  // are matched inside will be stored in a variable so it can be
  // accessed later. JavaScript supports this facility in the RegExp
  // object, through the RegExp.exec() method.
  // 
  // RegExp.exec() returns a String Array where index 0 is the full
  // matched string and each index after that, from 1 to however many
  // groups are in the pattern, contains the remembered text from each
  // group.
  // 
  // For example:
  //   const matchGroups = /^(\D+)\d+(\D+)$/.exec("abc1234xyz");
  //   expect(matchGroups.length).toEqual(3);
  //   expect(matchGroups[0]).toEqual("abc1234xyz");
  //   expect(matchGroups[1]).toEqual("abc");
  //   expect(matchGroups[2]).toEqual("xyz");
  // 
  // Capture groups also work with nested ( ). To keep track of which ( )
  // group goes with which array index, count the open parens ( from left
  // to right.
  // 
  // Note: A matching capture may be null (example: (.*) )
  
  it('getting the hang of it capture groups', function() {
    
    const pattern = /^([A-Za-z][\w\-.]*(\+([\w+]+))?)@(([a-z\d]+)((\.([a-z\d]+))+))$/;

    const matches1 = pattern.exec( 'My.Name01+alias@mail.gmail.com' );
    const matches2 = pattern.exec( 'simple@gmail.com'               );
    
    expect( matches1[0]   ).toEqual('___');
    expect( matches1[1]   ).toEqual('___');
    expect( matches1[3]   ).toEqual('___');
    expect( matches1[___] ).toEqual('mail.gmail.com');
    
    expect( matches2[2]   ).toEqual(___);
    expect( matches2[___] ).toEqual('.com');    // there are two possible answers here
    
    // Do you recognize this pattern? It's a more complex version of the email
    // pattern from the Grouping Koan. What enhancements have been made?
  });
  
  it('Real World 4: Find the ID of a DIV tag', function() {
    // Assumption:
    //   * Each DIV tag will be of the simple form:
    //     <div id="someId"> Some text may be here </div>
    //   * The spaces within the tag will be exactly as shown, so <div id = "someId"> is illegal
    //   * The id will be the only attribute inside the div tag
    //   * Only double-quote will be used (")
    
    const fixThisPattern = /^___$/;
    
    const matches = fixThisPattern.exec( '<div id="anArbitraryId"> Here is my text node! </div>' );
    
    expect( matches[___] ).toEqual("anArbitraryId");
    
  });
  
  // Important Note: Mathematically speaking, it is not possible for regular
  // expressions to exactly capture or match the full range of valid HTML, as
  // defined by the W3C specifications. For a more entertaining way of saying
  // the same thing, see:
  // http://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags
  // 
  // That said, if the expectations and requirements are narrower than "parse
  // the whole HTML file", and the goal is a simple one of just finding some
  // relevant piece of information within the file, and if it's safe to assume
  // that the HTML file is properly formed and syntactically correct...
  // THEN you can get away with using a regular expression to get text out of HTML.
  
  it('Real World 5: Find the class of an arbitrary HTML tag', function() {
    // Assumption:
    //   * The tag may be any tag: DIV, SPAN, H1, TABLE, whatever
    //   * The tag may be a singleton like <img src="pic.jpg" class="withBorder" />
    //   * The tag may contain other attributes (see <img /> example above)
    //   * The class attribute may be multiple classes, like class="one two". In this case, just capture "one two".
    //   * The attribute spacing will be just as shown, with no extra spaces around =
    //   * There will only be one HTML tag in the input string
    //   * Only double-quote will be used (")
    //   * The class attribute is guaranteed to exist
    
    const fixThisPattern = /^___$/;
    
    const matches1 = fixThisPattern.exec( '<div id="someId" class="boxed"> Some text here </div>' );
    const matches2 = fixThisPattern.exec( '<span class="bold red"> Error! </span>'                );
    const matches3 = fixThisPattern.exec( '<img src="image.jpg" class="framed" id="myPortrait"/>' );
    
    expect( matches1[___] ).toEqual("boxed");
    expect( matches2[___] ).toEqual("bold red");
    expect( matches3[___] ).toEqual("framed");
  });
  
  it('Captured groups can be referenced within the pattern itself using backslash-n', function() {
    
    // Using the same counting system that the Pattern.exec() method uses, \1 \2 ... \n will
    // reference a group that has been defined within that same pattern.
    
    const thisPatternWorks = /^([a-z]+)\d+\1$/;
    
    const fixThisPattern = /^___$/;
    
    expect( 'ab12345ab' ).toMatch(thisPatternWorks);
    expect( 'a12345x'   ).not.toMatch(thisPatternWorks);
    
    expect( '"Hello there"'    ).toMatch(fixThisPattern);
    expect( '|some word here|' ).toMatch(fixThisPattern);
    expect( '(an expression)'  ).not.toMatch(fixThisPattern);
  });
  
  it('Real World 6: HTML tags may use single- or double-quotes', function() {
    // Assumption:
    //   Same as above, except that attributes may be:
    //     class="one"
    //     class='one'
    //   The attribute will never use a mismatch, like class="one'
    
    
    const fixThisPattern = /^___$/;
    
    const matches1 = fixThisPattern.exec( '<div id="someId" class="boxed"> Some text here </div>'   );
    const matches2 = fixThisPattern.exec( "<span class='bold red'> Error! </span>"                  );
    const matches3 = fixThisPattern.exec( '<img src="image.jpg" class=\'framed\' id="myPortrait"/>' );
    
    expect( matches1[___] ).toEqual('boxed');
    expect( matches2[___] ).toEqual('bold red');
    expect( matches3[___] ).toEqual('framed');
  });

});
