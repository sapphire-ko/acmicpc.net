var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var k = '';
for(var i = 1; i <= n; ++i) {
  k += i;
}
var z = [];
function permutation(x, y) {
  if(x.length === 0) {
    z.push(y.split('').join(' '));
  }
  else {
    for(var i = 0; i < x.length; ++i) {
      var t = y + x[i];
      permutation(x.substring(0, i) + x.substring(i + 1), t);
    }
  }
}
permutation(k, '');
console.log(z.join('\n'));
