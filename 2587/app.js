var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); }).sort(function(a, b) { return a - b; });
var s = 0;
for(var i = 0; i < n.length; ++i) {
  s += n[i];
}
console.log((s / n.length) + '\n' + n[2]);
