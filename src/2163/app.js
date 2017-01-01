var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var a = Math.max(n[0], n[1]);
var b = Math.min(n[0], n[1]);
console.log((b - 1) + (a - 1) * b);
