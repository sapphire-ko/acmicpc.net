var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var a = '';
i = 0;
while(a.length <= n[1] && i < n[0]) {
  a += n[0];
  ++i;
}
console.log(a.substring(0, n[1]));
