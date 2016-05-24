var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var k = n.shift().split(' ').map(function(e) { return parseInt(e); });
var a = n.splice(0, k[0]).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var b = n.map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
console.log(a.map(function(e, i) { return e.map(function(e, j) { return (e + b[i][j]); }).join(' '); }).join('\n'));
