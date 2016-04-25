function gcd(a, b) {
  while(b !== 0) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;
}

var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var a = (n[0][0] * n[1][1]) + (n[1][0] * n[0][1]);
var b = n[0][1] * n[1][1];

var x = gcd(a, b);
console.log(a / x + ' ' + b / x);
