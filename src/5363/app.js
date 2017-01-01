var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); });
console.log(s.map(function(e) {
  var x = e.split(' ');
  if(x.length > 2) {
    var t = x.splice(0, 2);
    return x.join(' ') + ' ' + t.join(' ');
  }
  else {
    return e;
  }
}).join('\n'));
