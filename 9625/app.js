var c = [1, 1];
function f(n) {
  if(c[n] === undefined) {
    c[n] = f(n - 1) + f(n - 2);
  }
  return c[n];
}
var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
if(n === 0) {
  console.log('1 0');
}
else if(n === 1) {
  console.log('0 1');
}
else {
  console.log(f(n - 2) + ' ' + f(n - 1));
}
