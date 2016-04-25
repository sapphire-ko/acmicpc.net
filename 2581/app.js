var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); });
var a = [];
function p(k) {
  if(k < 2) {
    return false;
  }
  for(var j = 2; j <= Math.floor(Math.sqrt(k)); ++j) {
    if(k % j === 0) {
      return false;
    }
  }
  return true;
}
var s = 0;
var m;
for(var i = n[0]; i <= n[1]; ++i) {
  if(p(i)) {
    s += i;
    if(m === undefined) {
      m = i;
    }
  }
}
if(s === 0) {
  console.log(-1);
}
else {
  console.log(s + '\n' + m);
}
