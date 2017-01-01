var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var a = [];
for(var i = 0; i <= n / 5; ++i) {
  for(var j = 0; j <= n / 3; ++j) {
    if(5 * i + 3 * j === n) {
      a.push(i + j);
    }
  }
}
console.log(a.length > 0 ? Math.min.apply(Math, a) : -1);
