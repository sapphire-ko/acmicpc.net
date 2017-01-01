var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var a = n;
var k = 10;
while(k < a) {
  var x = Math.round((a % k) / k) * k;
  a = a - (a % k) + x;
  k *= 10;
}
console.log(a);
