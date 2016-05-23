var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); });
var x = n.splice(0, 10).sort(function(a, b) { return (b - a); }).filter(function(e, i) { return (i < 3); }).reduce(function(p, c) { return (p + c); });
var y = n.sort(function(a, b) { return (b - a); }).filter(function(e, i) { return (i < 3); }).reduce(function(p, c) { return (p + c); });
console.log(x + ' ' + y);
