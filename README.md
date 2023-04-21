Regular Expression Koans
========================

A series of tutorials on Regular Expressions.

Learn how to write, read, and use Regular Expressions by completing or correcting
code to make failing Unit Tests pass. Each Koan includes a series of Unit Tests
which illustrate Regular Expression principles and techniques. I have made an effort
to avoid making forward references in the tutorial sequence, but there are enough
back references to earlier Koans that it would be best to complete the Koans in
the order presented.

Javascript's Regular Expression engine is very similar to that of many other
programming languages. For an [excellent summary of Javascript's Regex capabilities][jsRegex]
as well as those of many other languages, Jan Goyvaerts is your first and last resource.

To practice, to try out some code before using it in your program, or just to play around,
[rubular.com][rubular] is a fantastic Regular Expression resource.
It uses Ruby's Regex engine, but the differences are minor. This web tool should be in the
Bookmarks list of every programmer. There are many other good web-based Regular Expression
tools, too many to list here.

With many thanks to:

*  [EdgeCase](http://edgecase.com/) for the original, inspired, and inspirational [Ruby Koans](http://rubykoans.com/)

Installation
------------

```
$ git clone https://github.com/frenchroasted/RegexKoans.git
$ cd RegexKoans
$ npm install
```

Usage
-----
The test suite runs in jest, which is a powerful unit testing tool. Some
helpful commands have been included in the package.json file:

```
# To run all the tutorial test scripts at once
$ npm test

# To run jest in "watch" mode, which is interactive
$ npm run watch

# Once running in "watch" mode, jest provides tools to
# re-run a specific test or test file, and many other
# options. The test files are numbered which makes them
# easy to filter in the jest watch tool.
```

* Run the tests. See all the failing tests.
* Edit a test file, beginning with 01-Basics.js, save, and re-run the tests.
* Repeat until all the tests are passing.

[jsRegex]: http://www.regular-expressions.info/javascript.html
[rubular]: http://rubular.com/
