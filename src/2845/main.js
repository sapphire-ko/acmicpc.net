var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var x = n[0][0] * n[0][1];
console.log(n[1].map(function(e) {
  return e - x;
}).join(' '));
