var f = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseFloat(e); });
f.pop();
for(var i = 0; i < (f.length - 1); ++i) {
  console.log((f[i + 1] - f[i]).toFixed(2));
}
