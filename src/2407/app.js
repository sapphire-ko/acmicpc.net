var s = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var n = s[0];
var m = (s[1] > (s[0] - s[1]) ? s[0] - s[1] : s[1]);
console.log(n + ' ' + m);
var a = 1;
for(var i = n; i > (n - m); --i) {
  a *= i;
  a /= (i - n + m);
}
console.log(a);
