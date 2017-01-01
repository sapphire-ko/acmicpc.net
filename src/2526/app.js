var a = {};
var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var x = n[0];
a[x] = false;
var k;
while(true) {
  x = x * n[0] % n[1];
  if(a[x] === false) {
    a[x] = true;
    k = x;
    break;
  }
  else {
    a[x] = false;
  }
}
var c = 0;
while(true) {
  ++c;
  x = x * n[0] % n[1];
  if(x === k) {
    break;
  }
}
console.log(c);
