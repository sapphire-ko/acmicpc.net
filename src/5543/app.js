var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); });
console.log(Math.min(n[0], n[1], n[2]) + Math.min(n[3], n[4]) - 50);
