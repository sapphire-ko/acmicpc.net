var a = [];
var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' '); }).reverse();
var k = n.pop();
for(var i = 0; i < k[0]; ++i) {
  a.push({});
}
n.forEach(function(e) {
  a[e[0] - 1][e[1] - 1] = true;
  a[e[1] - 1][e[0] - 1] = true;
});
console.log(a.map(function(e) {
  return Object.keys(e).length;
}).join('\n'));
