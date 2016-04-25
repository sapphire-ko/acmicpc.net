var x = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(':').map(function(e) { return parseInt(e); }); });
var c;
var h, m, s;
s = (x[1][2] - x[0][2] + 60) % 60;
if(x[0][2] > x[1][2]) {
  c = 1;
}
else {
  c = 0;
}
m = (x[1][1] - x[0][1] - c + 60) % 60;
if(x[0][1] + c > x[1][1]) {
  c = 1;
}
else {
  c = 0;
}
h = (x[1][0] - x[0][0] - c + 24) % 24;
console.log(('00' + h).substr(-2) + ':' + ('00' + m).substr(-2) + ':' + ('00' + s).substr(-2));
