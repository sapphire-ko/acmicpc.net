var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
s.pop();
console.log(s.map(function(e) {
  var a = e[0] * 3 - e[0] - e[1];
  var b = e[1] * 3 - e[0] - e[1];
  var c = (e[0] + e[1]) / 2;
  a = (a > e[0] ? Infinity : a);
  b = (e[1] > b ? Infinity : b);
  c = ((c < e[0] || e[1] < c) ? Infinity : c);
  return Math.min(a, b, c);
}).join('\n'));
