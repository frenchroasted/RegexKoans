describe("Regular Expression Replacement", function() {

  // Sometimes, you want to do more than just FIND some text, or validate
  // its format. You may want to construct new strings from old strings.
  // Most (all?) programming languages and editors that provide Regular
  // Expression operations have some kind of "replace" function. This
  // works just like a "Find-and-Replace" tool that is common in any
  // decent text editor, but it adds the power of Regular Expressions
  // to the "Find" part, and it adds Regex capture groups to the
  // "Replace" part.
  //
  // Note: Every language and text editor has a different way of referencing
  // capture groups in the Replace operation, so be sure to check the
  // documentation before using this tool.
  //
  // Once you've done find/replace using Regex, you'll never go back.

  it('simple replacement', function() {

    const newString = "dog cat pony".replace( /cat/, 'lemming' );

    expect( newString ).toEqual('dog lemming pony');
  });

  it('the //g suffix changes "Replace One" into "Replace All"', function() {
    const original = "a b a b a b";

    const newFirst = original.replace( /b/, "X");
    const newAll   = original.replace( /b/g, "X");

    expect( newFirst ).toEqual('a X a b a b');
    expect( newAll   ).toEqual('a X a X a X');
  });

  it('String.replace is safe even when there is no match', function() {
    const original = "a b a b a b";

    const newString = original.replace(/x/g, "z");

    expect( newString ).toEqual('a b a b a b');
  });

  it('String.replace will replace the full match (or each full match with //g) with the new string', function() {
    const original = '<div id="someId">Hello</div>';

    const newString = original.replace(/^<div id="([^"]+)">.*?<\/div>$/g, 'newId');

    expect( newString ).toEqual('newId');
  });

  it('to reference a capture group, use $n inside the replacement string', function() {

    // Note: Since, in Javascript, $ is a special character in the replacement string,
    // to put a literal $ in the replacement string, say $$

    const original = '<div id="someId">Hello</div>';

    const newString = original.replace(/^<div id="([^"]+)">.*?<\/div>$/g, '$1');

    expect( newString ).toEqual('someId');
  });

  it('to match a full string but only replace a portion, use group captures carefully', function() {

    const original = '<div id="someId">Hello</div>';

    const newString = original.replace(/^<div id="([^"]+)">(.*?)<\/div>$/g, '<div id="$2">$1</div>');

    expect( newString ).toEqual('<div id="Hello">someId</div>');
  });

  // By combining all the earlier lessons of capture groups and repeating character logic
  // that we've already covered with backreferences to those captured groups in
  // replacement strings, Regular Expression replacement can be a very powerful tool
  // in a wide variety of circumstances.

  it('make a URL into an HTML link', function() {
    const url = 'http://www.google.com/';

    const fixThisPattern = /^(.*)$/;
    const fixThisReplacementString = '<a href="$1">$1</a>';

    const newString = url.replace(fixThisPattern, fixThisReplacementString);

    expect( newString ).toEqual('<a href="http://www.google.com/">http://www.google.com/</a>');
  });

  it('reformat a date string', function() {
    const originalDate = '20120229';

    const fixThisPattern = /^(\d{4})(\d{2})(\d{2})$/;
    const fixThisReplacementString = '$2/$3/$1';

    const newDate = originalDate.replace(fixThisPattern, fixThisReplacementString);

    expect( newDate ).toEqual('02/29/2012');
  });

  it('strip the comment from this HTML code', function() {
    const html = '<h1>My Title</h1> <!-- useless comment --> <br/>';

    const fixThisPattern = /<!--.*?-->/;
    const fixThisReplacementString = '';

    const newHtml = html.replace(fixThisPattern, fixThisReplacementString);

    expect( newHtml ).toEqual('<h1>My Title</h1>  <br/>');
  });

});
