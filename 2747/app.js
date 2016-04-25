var a = { 0: 0, 1: 1 };
function f(k) {
  if(a[k] === undefined) {
    a[k] = f(k - 1) + f(k - 2);
  }
  return a[k];
}
var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(f(n));
