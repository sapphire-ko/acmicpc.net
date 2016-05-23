var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var a = n[0][0], b = n[0][1], x = n[1][0], y = n[1][1];
var c = Math.ceil((a - y) / x);
var d = Math.floor((b - y) / x);
console.log(c === d ? (x * c) + y : 'Unknwon Number');
