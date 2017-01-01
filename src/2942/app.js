function gcd(a, b) {
  while(b !== 0) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;
}
var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var x = gcd(n[0], n[1]);
var t = [];
for(var i = 1; i < Math.sqrt(x); ++i) {
  if(x % i === 0) {
    t.push(i);
    t.push(x / i);
  }
}
if(Math.sqrt(x) === Math.floor(Math.sqrt(x))) {
  t.push(Math.sqrt(x));
}
console.log(t.sort().map(function(e) {
  return (e + ' ' + (n[0] / e) + ' ' + (n[1] / e));
}).join('\n'));
