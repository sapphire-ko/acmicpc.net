var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(''); });
console.log(s.map(function(e) {
  var a = {};
  var p;
  e.forEach(function(f, i) {
    if(p === undefined) {
      p = i;
      a[p] = 1;
    }
    else {
      if(e[i] === e[i - 1]) {
        ++a[p];
      }
      else {
        p = i;
        a[p] = 1;
      }
    }
  });
  return Object.keys(a).map(function(e) {
    return a[e];
  }).sort(function(a, b) { return b - a; })[0];
}).join('\n'));
