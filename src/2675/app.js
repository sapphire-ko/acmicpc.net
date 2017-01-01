var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s.shift();
s = s.map(function(e) { return e.split(' '); });
console.log(s.map(function(e) {
  return e[1].split('').map(function(k) {
    var x = '';
    for(var i = 0; i < e[0]; ++i) {
      x += k;
    }
    return x;
  }).join('');
}).join('\n'));
