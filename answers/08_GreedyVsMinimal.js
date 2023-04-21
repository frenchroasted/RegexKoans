describe("Greedy vs Minimal", function() {

  it('Remember: the String.match() method will return the matched text', function() {
    // Remember that the match() method will provide the text matched
    // by the pattern. The match() returns an array so that, if the
    // pattern is a global pattern (//g), all matches can be returned
    // at once.
    //
    // We will be using the matched value to complete the tests in this Koan.

    const matches = 'aabbbcc'.match( /b+/ );

    expect( matches[0] ).toEqual('bbb');

  });

  it('* and + are "greedy" and may match more text than you intend', function() {
    const matches = '"One","Two","Three"'.match( /".*"/ );

    expect( matches[0] ).toEqual('"One","Two","Three"');    // Change '"One"' so the test passes
  });

  // Greedy character matching is a common downfall of many regular expressions.
  // In short, when * or + is used, the regex engine will attempt to use that
  // repeat instruction to capture as much of the string as possible while still
  // satisfying the other criteria in the regex. This can sometimes lead to
  // unexpected results, as illustrated above.
  //
  // Fortunately, this greedy behavior can be easily toggled on and off, as we'll
  // see below. In the case of the One,Two,Three Koan, there are two ways we can
  // match just the "One" portion of the string:
  //   * Use a negative character set
  //   * Turn off greedy matching and use "reluctant" or "minimal" matching instead

  it('use a negative character set to control the greedy match', function() {
    const workingMatches = '"One","Two","Three"'.match( /"[^"]*"/ );

    const tagMatches = '<span class="bold">Hello, world!</span>'.match( /<[^>]*>/ );

    expect( workingMatches[0] ).toEqual('"One"');

    expect( tagMatches[0] ).toEqual('<span class="bold">');
  });

  it('use minimal match to capture the substring', function() {
    // To change * and + to non-greedy, minimal matching,
    // use *? and +? instead.

    const fixThisPattern = /<.*?>/;

    const matches = '<span class="bold">Hello, world!</span>'.match(fixThisPattern);

    expect( matches[0] ).toEqual('<span class="bold">');

    expect(fixThisPattern.source).not.toMatch(/\[/);
  });


  // Side note: Have you noticed that none of the above regex patterns use
  // ^ $ like most of the other patterns in earlier Koans?
  //
  // Do you know why?


  // Remember:
  //   * and + are greedy by default.
  //   . does not match linefeed (\n), so .* is greedy until it encounters a \n

});
