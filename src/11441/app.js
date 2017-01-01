var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); }).reverse();
var a = [0];
n.pop().forEach(function(e, i) {
  a.push(a[i] + e);
});
n.pop();
n.reverse();
console.log(n.map(function(e) {
  return a[e[1]] - a[e[0] - 1];
}).join('\n'));
