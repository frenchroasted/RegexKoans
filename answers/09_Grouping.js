describe("Grouping", function() {

  // Until now, we have used special characters and modifiers like ? and +
  // with single characters. All regular expression operators can also be
  // applied to sequences by grouping the sequence inside ( ) like
  // "ababababab" =~ /^(ab)+$/

  it('the cat is optional', function() {

    var fixThisPattern = /^Dog(Cat)?Pony$/;

    expect( 'DogCatPony' ).toMatch(fixThisPattern);
    expect( 'DogPony'    ).toMatch(fixThisPattern);
  });

  it('anything goes as long as we get to keep the pony', function() {

    var fixThisPattern = /^(Dog)*(Cat)?Pony$/;

    expect( 'DogCatPony'          ).toMatch(fixThisPattern);
    expect( 'DogPony'             ).toMatch(fixThisPattern);
    expect( 'CatPony'             ).toMatch(fixThisPattern);
    expect( 'DogDogDogDogCatPony' ).toMatch(fixThisPattern);
  });

  it('you can nest regular expression operations inside ( )', function() {

    var fixThisPattern = /^(Dog)*(Cats?)?Pony$/;

    expect( 'DogCatPony'           ).toMatch(fixThisPattern);
    expect( 'DogCatsPony'          ).toMatch(fixThisPattern);
    expect( 'DogPony'              ).toMatch(fixThisPattern);
    expect( 'CatPony'              ).toMatch(fixThisPattern);
    expect( 'DogDogDogDogCatsPony' ).toMatch(fixThisPattern);
  });

  it('you can nest ( ) inside ( )', function() {

    var fixThisPattern = /^((ab)+cd)+(ab)*$/;

    expect( 'abcd'           ).toMatch(fixThisPattern);
    expect( 'abcdabcdabcd'   ).toMatch(fixThisPattern);
    expect( 'ababababcdabab' ).toMatch(fixThisPattern);
  });

  it('Real World 3: very VERY basic email address verification', function() {
    // Assumptions:
    //   * email address is composed of [username]@[domain]
    //   * both username and domain are required
    //   * username portion of email may contain letters, numbers, _ - . +
    //   * domain is composed of [letters/numbers].[letters/numbers]....repeat
    //   * in domain, . is the separator between each unit. Domain cannot begin or end with .
    //   * email address will be all in lowercase
    //
    // Note that this is an oversimplification of the real email address
    // syntax requirements. In fact, using a regular expression to check
    // the full email address specification (http://www.ietf.org/rfc/rfc822.txt)
    // is very, very complicated. In this case, as with many others,
    // it is important to understand the business rules that apply, and
    // to not over-engineer. Here, we're agreeing that these are the only
    // rules we care about for email addresses, so our regex doesn't need
    // to worry about all the other stuff.

    var fixThisPattern = /^[a-z0-9_+.\-]+@[a-z0-9]+(\.[a-z0-9]+)+$/;

    // Hint: Develop the regex in pieces. First make a pattern that
    // matches the username part, then one section of the domain,
    // then allow multiple domain sections, then glue it all together.
    //
    // Just like writing a program, a complicated regular expression
    // can often be broken into smaller, simpler pieces and then
    // assembled into the final whole.

    // valid
    expect( 'myname@internet.com'                      ).toMatch(fixThisPattern);
    expect( 'my_name2@server16.subdomain.internet.org' ).toMatch(fixThisPattern);
    expect( 'jdoe87@college.edu'                       ).toMatch(fixThisPattern);
    expect( 'jdoe87+myalias@gmail.com'                 ).toMatch(fixThisPattern);
    expect( 'my.really.long.first-name@internet.co.uk' ).toMatch(fixThisPattern);

    // invalid
    expect( 'myname@internet..com'             ).not.toMatch(fixThisPattern);
    expect( 'myname@internet'                  ).not.toMatch(fixThisPattern);
    expect( 'myname'                           ).not.toMatch(fixThisPattern);
    expect( 'myname!@internet.com'             ).not.toMatch(fixThisPattern);
    expect( 'myname@internet.my-subdomain.com' ).not.toMatch(fixThisPattern);
    expect( 'MyName@internet.com'              ).not.toMatch(fixThisPattern);
  });

});
