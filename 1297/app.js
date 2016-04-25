var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var a = Math.floor(n[0] * n[1] / Math.sqrt(Math.pow(n[1], 2) + Math.pow(n[2], 2)));
var b = Math.floor(n[0] * n[2] / Math.sqrt(Math.pow(n[1], 2) + Math.pow(n[2], 2)));
console.log(a + ' ' + b);
