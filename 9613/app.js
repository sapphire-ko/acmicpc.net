function gcd(a, b) {
  while(b !== 0) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;
}
var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var t = parseInt(s.shift());
for(var i = 0; i < t; ++i) {
  var x = s.shift().split(' ').filter(function(e, i) { return (i > 0); }).map(function(e) { return parseInt(e); });
  var a = 0;
  for(var j = 0; j < x.length - 1; ++j) {
    for(var k = j + 1; k < x.length; ++k) {
      a += gcd(x[j], x[k]);
    }
  }
  console.log(a);
}
