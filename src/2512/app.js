var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s.shift();
var k = parseInt(s.pop());
var n = s.pop().split(' ').map(function(e) { return parseInt(e); }).sort(function(a, b) { return (b - a); });
var x = n.reduce(function(prev, curr) { return (prev + curr); }, 0);
if(x <= k) {
  console.log(n[0]);
}
else {
  var z = Math.ceil((x - k) / n.length);
  console.log(z);
  console.log(n[0] - z);
}
