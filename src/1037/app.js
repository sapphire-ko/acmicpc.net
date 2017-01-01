var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); })[0].split(' ').map(function(e) { return parseInt(e); }).sort(function(a, b) { return a - b; });
console.log(n[0] * n[n.length - 1]);
