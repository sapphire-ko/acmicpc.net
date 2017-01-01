var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').sort(function(a, b) { return b.length - a.length }).map(function(e) { return e.split('').reverse(); });
var c = 0;
var s = input[0].map(function(e, i) { var s = parseInt(input[0][i]) + parseInt(input[1][i] ? input[1][i] : 0) + c; c = Math.floor(s / 10); return s % 10; });
if(c !== 0) {
  s.push(c);
}
s.reverse();
console.log(s.join(''));
