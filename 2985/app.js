var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var c = '+-*/'.split('');
function x(t) {
  for(var i = 0; i < c.length; ++i) {
    var s = t[0] + c[i] + t[1] + '===' + t[2];
    if(eval(s)) {
      return s;
    }
    var r = t[0] + '===' + t[1] + c[i] + t[2];
    if(eval(r)) {
      return r;
    }
  }
}
console.log(x(n).replace('===', '='));
