describe("Intermission", function() {

  const ___ = 0;
  
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
    
    const fixThisPattern = /___/;
    
    // in matches1[cityGroup], etc., set the index to find each value
    const cityGroup  = ___;
    const stateGroup = ___;
    const zipGroup   = ___;
    
    const matches1 = fixThisPattern.exec(' Columbus, OH 43215'           );
    const matches2 = fixThisPattern.exec(' San Francisco, CA 94118-4503' );
    const matches3 = fixThisPattern.exec(' APO AE 09499-0074'            );
    const matches4 = fixThisPattern.exec(' Port St. Lucie FL 34952'      );
    
    const city1  = matches1[cityGroup];
    const state1 = matches1[stateGroup];
    const zip1   = matches1[zipGroup];
    
    const city2  = matches2[cityGroup];
    const state2 = matches2[stateGroup];
    const zip2   = matches2[zipGroup];
    
    const city3  = matches3[cityGroup];
    const state3 = matches3[stateGroup];
    const zip3   = matches3[zipGroup];
    
    const city4  = matches4[cityGroup];
    const state4 = matches4[stateGroup];
    const zip4   = matches4[zipGroup];
    
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
    //   * server is required, can be numeric (IPv4) or named
    //   * server name might only be one word (e.g. 'localhost')
    //   * port is optional
    //   * directory and file name are both optional
    //   * directory, if present, will always end in /
    //   * query string (GET parameters) is optional
    //   * any missing value will be "" (instead of null)
    
    const fixThisPattern = /^(http)(:)/;
    
    const protocolGroupIndex  = ___;
    const serverGroupIndex    = ___;
    const portGroupIndex      = ___;
    const directoryGroupIndex = ___;
    const fileGroupIndex      = ___;
    const queryGroupIndex = ___;
    
    // valid
    const matches1 = fixThisPattern.exec( 'http://www.google.com/'                                );
    const matches2 = fixThisPattern.exec( 'https://mysearch.com/search.jsp?q=regular+expressions' );
    const matches3 = fixThisPattern.exec( 'ftp://192.168.0.100/home/myself/music/'                );
    const matches4 = fixThisPattern.exec( 'ssh://localhost/etc/passwd'                            );
    const matches5 = fixThisPattern.exec( 'http://127.0.0.1:8080/Admin/index.jsp'                 );
    
    // invalid
    const matches6 = fixThisPattern.exec( 'google.com'                  );
    const matches7 = fixThisPattern.exec( 'gopher://oldserver.arpanet/' );
    
    // Debug:
    // jasmine.log("Debug: " + matches1);

    const protocol1   = matches1.length > protocolGroupIndex  ? matches1[protocolGroupIndex]  : "";
    const server1     = matches1.length > serverGroupIndex    ? matches1[serverGroupIndex]    : "";
    const port1       = matches1.length > portGroupIndex      ? matches1[portGroupIndex]      : "";
    const directory1  = matches1.length > directoryGroupIndex ? matches1[directoryGroupIndex] : "";
    const file1       = matches1.length > fileGroupIndex      ? matches1[fileGroupIndex]      : "";
    const getParams1  = matches1.length > queryGroupIndex     ? matches1[queryGroupIndex]     : "";
    
    const protocol2   = matches2.length > protocolGroupIndex  ? matches2[protocolGroupIndex]  : "";
    const server2     = matches2.length > serverGroupIndex    ? matches2[serverGroupIndex]    : "";
    const port2       = matches2.length > portGroupIndex      ? matches2[portGroupIndex]      : "";
    const directory2  = matches2.length > directoryGroupIndex ? matches2[directoryGroupIndex] : "";
    const file2       = matches2.length > fileGroupIndex      ? matches2[fileGroupIndex]      : "";
    const getParams2  = matches2.length > queryGroupIndex     ? matches2[queryGroupIndex]     : "";
    
    const protocol3   = matches3.length > protocolGroupIndex  ? matches3[protocolGroupIndex]  : "";
    const server3     = matches3.length > serverGroupIndex    ? matches3[serverGroupIndex]    : "";
    const port3       = matches3.length > portGroupIndex      ? matches3[portGroupIndex]      : "";
    const directory3  = matches3.length > directoryGroupIndex ? matches3[directoryGroupIndex] : "";
    const file3       = matches3.length > fileGroupIndex      ? matches3[fileGroupIndex]      : "";
    const getParams3  = matches3.length > queryGroupIndex     ? matches3[queryGroupIndex]     : "";
    
    const protocol4   = matches4.length > protocolGroupIndex  ? matches4[protocolGroupIndex]  : "";
    const server4     = matches4.length > serverGroupIndex    ? matches4[serverGroupIndex]    : "";
    const port4       = matches4.length > portGroupIndex      ? matches4[portGroupIndex]      : "";
    const directory4  = matches4.length > directoryGroupIndex ? matches4[directoryGroupIndex] : "";
    const file4       = matches4.length > fileGroupIndex      ? matches4[fileGroupIndex]      : "";
    const getParams4  = matches4.length > queryGroupIndex     ? matches4[queryGroupIndex]     : "";
    
    const protocol5   = matches5.length > protocolGroupIndex  ? matches5[protocolGroupIndex]  : "";
    const server5     = matches5.length > serverGroupIndex    ? matches5[serverGroupIndex]    : "";
    const port5       = matches5.length > portGroupIndex      ? matches5[portGroupIndex]      : "";
    const directory5  = matches5.length > directoryGroupIndex ? matches5[directoryGroupIndex] : "";
    const file5       = matches5.length > fileGroupIndex      ? matches5[fileGroupIndex]      : "";
    const getParams5  = matches5.length > queryGroupIndex     ? matches5[queryGroupIndex]     : "";
    
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
