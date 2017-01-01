var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var i = 0;
while(n > i) {
  ++i;
  n -= i;
}
console.log(i);
