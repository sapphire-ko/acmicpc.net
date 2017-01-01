var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var x = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var y = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var a = 2;
for(var i = 0; i < n[1] - 1; ++i) {
  a += y[i];
}
a += n[0];
console.log(x[a % 7]);
