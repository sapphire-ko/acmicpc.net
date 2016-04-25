var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e, i) { return [parseInt(e), i + 1]; }).sort(function(a, b) { return b[0] - a[1]; }).filter(function(e, i) { return (i < 5); });
var s = 0;
for(var i = 0; i < 5; ++i) {
  s += n[i][0];
}
console.log(s + '\n' + n.map(function(e) { return e[1]; }).sort(function(a, b) { return a - b; }).join(' '));
