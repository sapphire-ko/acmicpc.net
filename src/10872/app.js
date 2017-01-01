var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var a = 1;
for(var i = 1; i <= n; ++i) {
  a *= i;
}
console.log(a);
