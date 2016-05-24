var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var t = parseInt(s.shift());
for(var i = 0; i < t; ++i) {
  var k = parseInt(s.shift());
  console.log(s.splice(0, k).map(function(e) { var l = e.split(' '); return [parseInt(l[0]), l[1]]; }).sort(function(a, b) { return (b[0] - a[0]); })[0][1]);
}
