var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
function count_2(n) {
  var c = 0;
  for(var i = 2; (n / i) >= 1; i *= 2) {
    c += Math.floor(n / i);
  }
  return c;
}
function count_5(n) {
  var c = 0;
  for(var i = 5; (n / i) >= 1; i *= 5) {
    c += Math.floor(n / i);
  }
  return c;
}
var t_2 = count_2(n[0]) - count_2(n[0] - n[1]) - count_2(n[1]);
var t_5 = count_5(n[0]) - count_5(n[0] - n[1]) - count_5(n[1]);
console.log(Math.min(t_2, t_5));
