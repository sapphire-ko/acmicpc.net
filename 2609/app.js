var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });

function gcd(a, b) {
  while(b !== 0) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function lcm(a, b) {
  var g = gcd(a, b);
  return (a / g) * (b);
}

console.log(gcd(n[0], n[1]) + '\n' + lcm(n[0], n[1]));
