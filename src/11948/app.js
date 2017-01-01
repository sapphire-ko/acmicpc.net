var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); });
var x = n.splice(0, 4);
var y = n;
console.log(x.sort(function(a, b) { return b - a; }).filter(function(e, i) { return (i < 3); }).reduce(function(prev, curr) { return prev + curr; }) + y.sort(function(a, b) { return b - a; })[0]);
