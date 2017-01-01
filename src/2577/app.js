var a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); }).reduce(function(prev, curr) { return prev * curr; }).toString().split('').forEach(function(e) {
  ++a[e];
});
console.log(a.join('\n'));
