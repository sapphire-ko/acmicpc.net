console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.toLowerCase(); }).map(function(e) {
  var x = e.split('');
  var k = 'abcdefghijklmnopqrstuvwxyz'.split('').map(function(e) {
    if(x.indexOf(e) === -1) {
      return e;
    }
  }).filter(function(e) { return (e === undefined ? false : true); });
  if(k.length === 0) {
    return 'pangram';
  }
  else {
    return 'missing ' + k.join('');
  }
}).join('\n'));
