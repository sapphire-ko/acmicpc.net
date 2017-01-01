var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
if(n[1] < 45) {
  n[0] -= 1;
  n[1] += 15;
}
else {
  n[1] -= 45;
}
if(n[0] === -1) {
  n[0] = 23;
}
console.log(n.join(' '));
