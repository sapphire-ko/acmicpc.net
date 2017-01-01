var c = [1, 1, 2, 4];
function f(n) {
  if(c[n] === undefined) {
    c[n] = f(n - 1) + f(n - 2) + f(n - 3) + f(n - 4);
  }
  return c[n];
}
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return parseInt(e); }).map(function(e) { return f(e); }));
