var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var x = n;
var c = 0;
do {
  ++c;
  var a = Math.floor(x / 10), b = x % 10;
  x = b * 10 + ((a + b) % 10);
}
while(n !== x);
console.log(c);
