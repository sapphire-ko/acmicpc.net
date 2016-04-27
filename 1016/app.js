var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var a = [];
for(var i = 2; i <= Math.sqrt(n[1]); ++i) {
  a.push(Math.pow(i, 2));
}
var c = 0;
for(var i = n[0]; i <= n[1]; ++i) {
  var f = false;
  for(var j = 0; j < a.length; ++j) {
    if(i % a[j] === 0) {
      f = true;
    }
  }
  if(f === false) {
    ++c;
  }
}
console.log(c);
