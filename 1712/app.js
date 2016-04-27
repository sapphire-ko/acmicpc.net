var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });

if(n[2] <= n[1]) {
  console.log(-1);
}
else {
  console.log(Math.floor((n[0] / (n[2] - n[1]))) + 1);
}
