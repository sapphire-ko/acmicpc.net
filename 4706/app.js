var f = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseFloat(e); }); });
f.pop();
console.log(f.map(function(e) {
  var r = e[1] / e[0];
  return Math.sqrt(1 - Math.pow(r, 2)).toFixed(3);
}).join('\n'));
