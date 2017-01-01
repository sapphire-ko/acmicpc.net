var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
console.log(n.map(function(e) {
  return n.filter(function(f) {
    return (e[0] < f[0] && e[1] < f[1]);
  }).length + 1;
}).join(' '));
