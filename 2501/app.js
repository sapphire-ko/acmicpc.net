var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var a = [];
for(var i = 1; i <= n[0]; ++i) {
  if(n[0] % i === 0) {
    a.push(i);
  }
}
if(a.length >= n[1]) {
  console.log(a[n[1] - 1]);
}
else {
  console.log(0);
}
