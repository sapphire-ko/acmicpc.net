var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var x = 1;
var c = 1;
while(x < n) {
  x += 6 * c;
  ++c;
}
console.log(c);
