var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var k = parseInt(n[0]);
var c = parseInt(n[2]);
console.log(n[1].split(' ').map(function(e) { return parseInt(e); }).map(function(e) {
  return Math.ceil(e / c) * c;
}).reduce(function(p, c) { return (p + c); }));
