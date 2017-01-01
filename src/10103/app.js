var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var x = [100, 100];
n.forEach(function(e) {
  if(e[0] < e[1]) {
    x[0] -= e[1];
  }
  else if(e[1] < e[0]) {
    x[1] -= e[0];
  }
});
console.log(x.join('\n'));
