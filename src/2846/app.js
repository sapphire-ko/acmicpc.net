var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(function(e) { return parseInt(e); });
var m = 0;
var k = n[0];
for(var i = 1; i < n.length; ++i) {
  if(n[i - 1] < n[i]) {
    m = Math.max(m, n[i] - k);
  }
  else {
    k = n[i];
  }
}
console.log(m);
