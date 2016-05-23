var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var c = 0;
for(var i = 5; i <= n; ++i) {
  var k = i;
  while(k % 5 === 0) {
    ++c;
    k /= 5;
  }
}
console.log(c);
