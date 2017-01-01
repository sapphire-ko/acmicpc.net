var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); }).reverse();
var k = n.pop();
n = n.reverse();
var a = [], b = [];
for(var i = 0; i < k[0]; ++i) {
  for(var j = 0; j < n[i][0]; ++j) {
    a.push(n[i][1]);
  }
}
for(var i = 0; i < k[1]; ++i) {
  for(var j = 0; j < n[i + k[0]][0]; ++j) {
    b.push(n[i + k[0]][1]);
  }
}
for(var i = 0; i < 100; ++i) {
  b[i] -= a[i];
}
var m = Math.max.apply(Math, b);
console.log(m < 0 ? 0 : m);
