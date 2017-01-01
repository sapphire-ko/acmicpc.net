var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s.shift();
s = s.map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
console.log(s.map(function(e) {
  e[0] += e[4];
  e[1] += e[5];
  e[2] += e[6];
  e[3] += e[7];
  return 1 * Math.max(1, e[0]) + 5 * Math.max(1, e[1]) + 2 * Math.max(0, e[2]) + 2 * e[3];
}).join('\n'));
