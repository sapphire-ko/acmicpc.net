var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var x = '0000000000'.split('').map(function(e) { return parseInt(e); });
for(var i = 1; i <= n; ++i) {
  i.toString().split('').forEach(function(e) {
    ++x[parseInt(e) - 1];
  });
}
console.log(x);
