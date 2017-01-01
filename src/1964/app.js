var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var x = 1 + n + 3 * (n * (n + 1) / 2);
console.log(x % 45678);
