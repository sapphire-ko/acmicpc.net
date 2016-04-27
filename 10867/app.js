var a = {};
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').forEach(function(e) { a[e] = true; });
console.log(Object.keys(a).sort(function(a, b) { return parseInt(a) - parseInt(b); }).join(' '));
