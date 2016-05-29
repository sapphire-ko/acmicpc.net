var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); });
n.pop();
var c = [1, 1];
function fib(n) {
  if(c[n] === undefined) {
    c[n] = (fib(n - 1) + fib(n - 2)) % 10000;
  }
  return c[n];
}
console.log(n.map(function(e) {
  return fib(e);
}));
