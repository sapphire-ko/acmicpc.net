var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
function p(k) {
  if(k < 2) {
    return false;
  }
  var x = Math.floor(Math.sqrt(k));
  for(var i = 2; i <= x; ++i) {
    if(k % i === 0) {
      return false;
    }
  }
  return true;
}
var s = '';
for(var i = n[0]; i <= n[1]; ++i) {
  if(p(i)) {
    s += i + '\n';
  }
}
console.log(s.trim());
