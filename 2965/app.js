var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
if((n[1] - n[0]) >= (n[2] - n[1])) {
  console.log(n[1] - n[0] - 1);
}
else {
  console.log(n[2] - n[1] - 1);
}
