var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
console.log((n[1] - 1) * n[0] + 1);
