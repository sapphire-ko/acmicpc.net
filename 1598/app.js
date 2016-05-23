var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
function coord(k) {
  var x = Math.floor((k - 1) / 4);
  var y = (k - 1) % 4;
  return [x, y];
}
var a = coord(n[0]);
var b = coord(n[1]);
console.log(Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]));
