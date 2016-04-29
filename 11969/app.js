var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var k = s.shift().split(' ').map(function(e) { return parseInt(e); });
var a = s.splice(0, k[0]).map(function(e) { return parseInt(e); });
var b = s.map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });;
var x = [[0, 0, 0]];
a.forEach(function(e, i) {
  x.push(x[i].map(function(f, j) { return ((j + 1) === e ? f + 1 : f); }));
});
console.log(b.map(function(e) {
  return x[e[1]].map(function(f, i) { return (f - x[e[0] - 1][i]); }).join(' ');
}).join('\n'));
