var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var n = input[0].split(' ').map(function(e) { return parseInt(e); });
var a = input.slice(1, n[0] + 1).map(function(e) { return parseInt(e); });
console.log(input.slice(n[0] + 1, n[0] + n[1] + 1).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); }).map(function(e) {
  console.log(e[0] + ' ' + e[1]);console.log(a.slice(e[0] - 1, e[1]));
  return Math.min.apply(Math, a.slice(e[0] - 1, e[1]));
}).join('\n'));
