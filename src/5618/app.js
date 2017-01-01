function gcd(a, b) {
  while(b !== 0) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;
}
var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(function(e) { return parseInt(e); }).reduce(function(prev, curr) {
  return gcd(prev, curr);
});
var s = '1';
for(var i = 2; i <= n; ++i) {
  if(n % i === 0) {
    s += '\n' + i;
  }
}
console.log(s);
