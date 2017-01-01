var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
console.log(Math.min(n[0][0] + n[1][1], n[0][1] + n[1][0]));
