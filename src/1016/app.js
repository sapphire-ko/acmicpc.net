var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var a = [];
for(var i = 2; i <= Math.sqrt(n[1]); ++i) {
  a.push(Math.pow(i, 2));
}
console.log(a);
var b = [];
for(var i = 0; i < a.length; ++i) {
  var x = Math.ceil(n[0] / a[i]);
  var y = Math.floor(n[1] / a[i]);
  for(var j = x; j <= y; ++j) {
    if(b.indexOf(a[i] * j) === -1) {
      b.push(a[i] * j);
    }
  }
}
console.log((n[1] - n[0] + 1) - b.length);
