var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse();
var n = s.pop().split(' ').map(function(e) { return parseInt(e); });
var k = Math.pow(n[1], 2) + Math.pow(n[2], 2);
console.log(s.reverse().map(function(e) {
  return (Math.pow(e, 2) <= k ? 'DA' : 'NE');
}).join('\n'));
