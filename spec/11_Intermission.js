describe("Intermission", function() {

  var ___ = 0;
  
  // Koans 1 through 10 teach enough about Regular Expressions
  // to handle most common RegEx scenarios. This Koan is a series
  // of puzzles and problems to solve with Regular Expressions
  // to help cement your understanding as well as provide some
  // more Real World examples.
  
  // Note: The starter patterns (like /___/) will NOT include
  // the ^ $ hints that were used in the earlier Koans. It's up
  // to you to decide whether you want to capture the whole
  // string or just a substring to solve the puzzle.
  
  it('Find City, State, and Zip code', function() {
    // Assumptions:
    //   * US Addresses (no Canadian provinces, etc.)
    //   * Common American address format: City, ST 12345
    //   * Comma separating City and State is optional
    //   * US State will always use two uppercase letter abbreviation
    
    var fixThisPattern = /___/;
    
    // in matches1[cityGroup], etc., set the index to find each value
    var cityGroup  = ___;
    var stateGroup = ___;
    var zipGroup   = ___;
    
    var matches1 = fixThisPattern.exec(' Columbus, OH 43215'           );
    var matches2 = fixThisPattern.exec(' San Francisco, CA 94118-4503' );
    var matches3 = fixThisPattern.exec(' APO AE 09499-0074'            );
    var matches4 = fixThisPattern.exec(' Port St. Lucie FL 34952'      );
    
    // Debug:
    // jasmine.log("Debug: " + matches1);
    
    var city1  = matches1[cityGroup];
    var state1 = matches1[stateGroup];
    var zip1   = matches1[zipGroup];
    
    var city2  = matches2[cityGroup];
    var state2 = matches2[stateGroup];
    var zip2   = matches2[zipGroup];
    
    var city3  = matches3[cityGroup];
    var state3 = matches3[stateGroup];
    var zip3   = matches3[zipGroup];
    
    var city4  = matches4[cityGroup];
    var state4 = matches4[stateGroup];
    var zip4   = matches4[zipGroup];
    
    expect( city1  ).toEqual('Columbus');
    expect( state1 ).toEqual('OH');
    expect( zip1   ).toEqual('43215');
    
    expect( city2  ).toEqual('San Francisco');
    expect( state2 ).toEqual('CA');
    expect( zip2   ).toEqual('94118-4503');
    
    expect( city3  ).toEqual('APO');
    expect( state3 ).toEqual('AE');
    expect( zip3   ).toEqual('09499-0074');
    
    expect( city4  ).toEqual('Port St. Lucie');
    expect( state4 ).toEqual('FL');
    expect( zip4   ).toEqual('34952');
  });
  
  it('Parse URL, detect invalid format', function() {
    // Assumptions:
    //   * Only accept these protocols: http, https, ftp, sftp, ssh
    //   * server is required, may be numeric (IPv5) or named
    //   * server name may only be one word (e.g. 'localhost')
    //   * port is optional
    //   * directory and file name are both optional
    //   * directory, if present, will always end in /
    //   * GET parameters are optional
    //   * any missing value will be "" (instead of null)
    
    var fixThisPattern = /^(http)(:)/;
    
    var protocolGroup  = ___;
    var serverGroup    = ___;
    var portGroup      = ___;
    var directoryGroup = ___;
    var fileGroup      = ___;
    var getParamsGroup = ___;
    
    // valid
    var matches1 = fixThisPattern.exec( 'http://www.google.com/'                                );
    var matches2 = fixThisPattern.exec( 'https://mysearch.com/search.jsp?q=regular+expressions' );
    var matches3 = fixThisPattern.exec( 'ftp://192.168.0.100/home/myself/music/'                );
    var matches4 = fixThisPattern.exec( 'ssh://localhost/etc/passwd'                            );
    var matches5 = fixThisPattern.exec( 'http://127.0.0.1:8080/Admin/index.jsp'                 );
    
    // invalid
    var matches6 = fixThisPattern.exec( 'google.com'                  );
    var matches7 = fixThisPattern.exec( 'gopher://oldserver.arpanet/' );
    
    // Debug:
    // jasmine.log("Debug: " + matches1);

    var protocol1   = matches1.length > protocolGroup  ? matches1[protocolGroup]  : "";
    var server1     = matches1.length > serverGroup    ? matches1[serverGroup]    : "";
    var port1       = matches1.length > portGroup      ? matches1[portGroup]      : "";
    var directory1  = matches1.length > directoryGroup ? matches1[directoryGroup] : "";
    var file1       = matches1.length > fileGroup      ? matches1[fileGroup]      : "";
    var getParams1  = matches1.length > getParamsGroup ? matches1[getParamsGroup] : "";
    
    var protocol2   = matches2.length > protocolGroup  ? matches2[protocolGroup]  : "";
    var server2     = matches2.length > serverGroup    ? matches2[serverGroup]    : "";
    var port2       = matches2.length > portGroup      ? matches2[portGroup]      : "";
    var directory2  = matches2.length > directoryGroup ? matches2[directoryGroup] : "";
    var file2       = matches2.length > fileGroup      ? matches2[fileGroup]      : "";
    var getParams2  = matches2.length > getParamsGroup ? matches2[getParamsGroup] : "";
    
    var protocol3   = matches3.length > protocolGroup  ? matches3[protocolGroup]  : "";
    var server3     = matches3.length > serverGroup    ? matches3[serverGroup]    : "";
    var port3       = matches3.length > portGroup      ? matches3[portGroup]      : "";
    var directory3  = matches3.length > directoryGroup ? matches3[directoryGroup] : "";
    var file3       = matches3.length > fileGroup      ? matches3[fileGroup]      : "";
    var getParams3  = matches3.length > getParamsGroup ? matches3[getParamsGroup] : "";
    
    var protocol4   = matches4.length > protocolGroup  ? matches4[protocolGroup]  : "";
    var server4     = matches4.length > serverGroup    ? matches4[serverGroup]    : "";
    var port4       = matches4.length > portGroup      ? matches4[portGroup]      : "";
    var directory4  = matches4.length > directoryGroup ? matches4[directoryGroup] : "";
    var file4       = matches4.length > fileGroup      ? matches4[fileGroup]      : "";
    var getParams4  = matches4.length > getParamsGroup ? matches4[getParamsGroup] : "";
    
    var protocol5   = matches5.length > protocolGroup  ? matches5[protocolGroup]  : "";
    var server5     = matches5.length > serverGroup    ? matches5[serverGroup]    : "";
    var port5       = matches5.length > portGroup      ? matches5[portGroup]      : "";
    var directory5  = matches5.length > directoryGroup ? matches5[directoryGroup] : "";
    var file5       = matches5.length > fileGroup      ? matches5[fileGroup]      : "";
    var getParams5  = matches5.length > getParamsGroup ? matches5[getParamsGroup] : "";
    
    // http://www.google.com/
    expect( protocol1  ).toEqual('http');
    expect( server1    ).toEqual('www.google.com');
    expect( port1      ).toEqual('');
    expect( directory1 ).toEqual('');
    expect( file1      ).toEqual('');
    expect( getParams1 ).toEqual('');
    
    // https://mysearch.com/search.jsp?q=regular+expressions
    expect( protocol2  ).toEqual('https');
    expect( server2    ).toEqual('mysearch.com');
    expect( port2      ).toEqual('');
    expect( directory2 ).toEqual('');
    expect( file2      ).toEqual('search.jsp');
    expect( getParams2 ).toEqual('?q=regular+expressions');
    
    // ftp://192.168.0.100/home/myself/music/
    expect( protocol3  ).toEqual('ftp');
    expect( server3    ).toEqual('192.168.0.100');
    expect( port3      ).toEqual('');
    expect( directory3 ).toEqual('home/myself/music/');
    expect( file3      ).toEqual('');
    expect( getParams3 ).toEqual('');
    
    // ftp://192.168.0.100/home/myself/music/
    expect( protocol4  ).toEqual('ssh');
    expect( server4    ).toEqual('localhost');
    expect( port4      ).toEqual('');
    expect( directory4 ).toEqual('etc/');
    expect( file4      ).toEqual('passwd');
    expect( getParams4 ).toEqual('');
    
    // http://127.0.0.1:8080/Admin/index.jsp
    expect( protocol5  ).toEqual('http');
    expect( server5    ).toEqual('127.0.0.1');
    expect( port5      ).toEqual(':8080');
    expect( directory5 ).toEqual('Admin/');
    expect( file5      ).toEqual('index.jsp');
    expect( getParams5 ).toEqual('');
    
    // google.com
    expect( matches6 ).toBeNull();
    
    // gopher://oldserver.arpanet/
    expect( matches7 ).toBeNull();
    
  });

});
