var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var k;
var c = 0;
if(n[0] <= n[1] * 2) {
  k = Math.floor(n[0] / 2);
  c += n[0] - k * 2;
  c += n[1] - k;
}
else {
  k = n[1];
  c += n[0] - n[1] * 2;
}
console.log(k, c);
if(c >= n[2]) {
  console.log(k);
}
else {
  n[2] -= c;
  k -= Math.ceil(n[2] / 2);
  console.log(k);
}
