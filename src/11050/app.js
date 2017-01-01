var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var c = [1];
function f(k) {
  if(c[k] === undefined) {
    c.push(k * f(k - 1));
  }
  return c[k];
}
console.log(f(n[0]) / (f(n[0] - n[1]) * f(n[1])));
