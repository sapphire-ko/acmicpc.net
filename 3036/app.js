function gcd(a, b) {
  while(b !== 0) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;
}

var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(function(e) { return parseInt(e); });
var x = n.shift();
console.log(n.map(function(e) {
  var k = gcd(x, e);
  return ((x / k) + '/' + (e / k));
}).join('\n'));
