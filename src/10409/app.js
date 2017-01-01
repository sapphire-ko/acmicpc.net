var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var t = n[0][1];
var x = 0;
var c = 0;
while((n[1][0] !== undefined) && (x + n[1][0] <= t)) {
  x += n[1].shift();
  ++c;
}
console.log(c);
