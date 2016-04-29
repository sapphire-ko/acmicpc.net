var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); }).sort(function(a, b) { return (a[0] - b[0]); });
if(n[0][1] >= n[1][0]) {
  console.log(Math.max(n[0][1], n[1][1]) - Math.min(n[0][0], n[1][0]));
}
else {
  console.log(n[0][1] - n[0][0] + n[1][1] - n[1][0]);
}
