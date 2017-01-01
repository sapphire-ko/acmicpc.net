var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var x = '1';
for(var i = 0; i < (n - 1); ++i) {
  x = '1' + x + '0';
}
console.log(x);
