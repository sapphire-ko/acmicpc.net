var u = { '0': '0', '1': '1' };
function c(a, b) {
  var x = a.split('');
  var y = b.split('');
  var l = 0;
  var z = '';
  while(x.length > 0 || y.length > 0) {
    var i = x.pop();
    var j = y.pop();
    i = (i === undefined ? 0 : parseInt(i));
    j = (j === undefined ? 0 : parseInt(j));
    var t = i + j + l;
    if(t >= 10) {
      l = 1;
      t %= 10;
    }
    else {
      l = 0;
    }
    z = t + z;
  }
  if(l > 0) {
    z = l + z;
  }
  return z;
}
function f(k) {
  if(u[k] === undefined) {
    u[k] = c(f(k - 1), f(k - 2));
  }
  return u[k];
}
var n = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(f(n));
