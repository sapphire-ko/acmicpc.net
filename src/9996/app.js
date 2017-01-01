var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); });
var x = s.shift().split('*').map(function(e) { return e.split(''); });
x[1].reverse();
console.log(s.map(function(e) {
  var f_0 = x[0].map(function(f, i) {
    return (e[i] === f);
  }).reduce(function(p, c) { return (p && c); });
  if(f_0) {
    e = e.substr(x[0].length);
  }
  var f_1 = x[1].map(function(f, i) {
    return (e[e.length - 1 - i] === f);
  }).reduce(function(p, c) { return (p && c); });
  return (f_0 && f_1 ? 'DA' : 'NE');
}).join('\n'));
