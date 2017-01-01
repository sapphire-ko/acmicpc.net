var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse();
var k = s.pop().split(' ').map(function(e) { return parseInt(e); });
var n = [];
for(var i = 0; i < k[0]; ++i) {
  n.push(s.pop().split(' ').map(function(e) { return parseInt(e); }));
}
s.pop();
console.log(s.reverse().map(function(e) {
  var x = e.split(' ').map(function(e) { return parseInt(e); });
  var s = 0;
  for(var i = (x[0] - 1); i < x[2]; ++i) {
    for(var j = (x[1] - 1); j < x[3]; ++j) {
      s += n[i][j];
    }
  }
  return s;
}).join('\n'));
