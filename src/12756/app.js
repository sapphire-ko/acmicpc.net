var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var a = Math.ceil(n[1][1] / n[0][0]);
var b = Math.ceil(n[0][1] / n[1][0]);
if(a === b) {
  console.log('DRAW');
}
else if(a < b) {
  console.log('PLAYER A');
}
else {
  console.log('PLAYER B');
}
