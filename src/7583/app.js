var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s.pop();
console.log(s.map(function(e) {
  return e.split(' ').map(function(e) {
    if(e.length > 3) {
      var x = e.split('');
      var a = x.shift();
      var b = x.pop();
      return a + x.reverse().join('') + b;
    }
    else {
      return e;
    }
  }).join(' ');
}).join('\n'));
