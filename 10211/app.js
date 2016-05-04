var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var k = n.shift();
for(var i = 0; i < k; ++i) {
  n.shift();
  var x = n.shift();
  var a = x[0], b = x[0];
  for(var j = 1; j < x.length; ++j) {
    a = Math.max(x[j], a + x[j]);
    b = Math.max(b, a);
  }
  console.log(b);
}
