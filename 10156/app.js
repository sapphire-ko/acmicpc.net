var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
console.log(n[0] * n[1] > n[2] ? (n[0] * n[1] - n[2]) : 0);
