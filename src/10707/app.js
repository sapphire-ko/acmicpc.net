var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); });
console.log(Math.min(n[4] * n[0], n[1] + (n[2] >= n[4] ? 0 : (n[4] - n[2]) * n[3])));
