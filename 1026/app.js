var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i === 0 ? false : e); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var a = input[0].sort(function(a, b) { return a - b; });
var b = input[1].sort(function(a, b) { return b - a; });
console.log(a.reduce(function(prev, curr, i) { return prev + (a[i] * b[i]); }, 0));
