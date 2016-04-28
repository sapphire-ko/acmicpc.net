var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse();
var p = s.pop().split(' ').map(function(e) { return parseInt(e); });
s = s.map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var x = 0;
for(var i = 1; i <= 100; ++i) {
  var t = 0;
  if(s[0][0] <= i && s[0][1] > i) {
    ++t;
  }
  if(s[1][0] <= i && s[1][1] > i) {
    ++t;
  }
  if(s[2][0] <= i && s[2][1] > i) {
    ++t;
  }
  if(t > 0) {
    x += p[t - 1] * t;
  }
}
console.log(x);
