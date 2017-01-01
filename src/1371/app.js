var a = {};
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').forEach(function(e) { e.split(' ').forEach(function(e) { e.split('').forEach(function(e) {
  a[e] = (a[e] === undefined ? 1 : a[e] + 1);
}); }); });
var m = a[Object.keys(a).sort(function(i, j) { return a[j] - a[i]; })[0]];
console.log(Object.keys(a).filter(function(e) { return (a[e] === m); }).sort(function(a, b) { return (a.charCodeAt() - b.charCodeAt()); }).join(''));
