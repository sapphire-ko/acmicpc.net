var n = 0;
var m;
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); }).map(function(e, i) {
  if(n < e) {
    n = e;
    m = i + 1;
  }
});
console.log(n + '\n' + m);
