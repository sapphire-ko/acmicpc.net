console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e, i) {
  var a = e.split('://');
  var protocol = a.shift();
  var b = a.join('://').split('/');
  var host, port;
  var c = b.shift();
  if(c.indexOf(':') === -1) {
    host = c;
    port = '<default>';
  }
  else {
    host = c.split(':')[0];
    port = c.split(':')[1];
  }
  var path = b.join('/');
  if(path.length === 0) {
    path = '<default>';
  }
  return 'URL #' + (i + 1) + '\nProtocol = ' + protocol + '\nHost     = ' + host + '\nPort     = ' + port + '\nPath     = ' + path + '\n';
}).join('\n'));
