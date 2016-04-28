var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(function(e) { return parseInt(e); });
var k = parseInt(n.join(''));
function c(p) {
  for(var i = (p.length - 1); i > 1; --i) {
    for(var j = (i - 1); j >= 1; --j) {
      if(p[i] > p[j]) {
        var t = p[j];
        p[j] = p[i];
        p[i] = t;
      }
      var x = parseInt(p.join(''));
      if(x > k) {
        return x;
      }
    }
  }
  var y = Infinity;
  for(var i = 1; i < p.length; ++i) {
    if(p[i] > p[0]) {
      y = Math.min(y, p[i]);
    }
  }
  if(y === Infinity) {
    return 0;
  }
  else {
    p.splice(p.indexOf(y), 1);
    p = p.sort(function(a, b) { return a - b; });
    return y + p.join('');
  }
}
console.log(c(n));
