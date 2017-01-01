var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var n = parseInt(s.shift());
for(var i = 0; i < n; ++i) {
  var k = parseInt(s.shift());
  var x = s.shift().split(' ').sort(function(a, b) { return (a - b); });
  var z = (x[x.length - 1] - x[0]) * 2;
  console.log(z);
}
