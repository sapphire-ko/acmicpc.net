var x = 0;
function c(n) {
  if(n < 4) {
    x += n - 1;
    return;
  }

  var q;
  var r = Infinity;
  var z;

  var k = Math.ceil(Math.log2(n));
  for(var i = k; i > 1; --i) {
    var v = Math.round(Math.pow(n, 1 / i));
    var a = Math.abs(n - Math.pow(v, i)), b = Math.abs(Math.pow(v, i + 1) - n);
    var s, t;
    if(a <= b) {
      s = i;
      t = a;
    }
    else {
      s = i + 1;
      t = b;
    }
    if(r > t) {
      q = s;
      r = t;
      z = v;
    }
  }

  x += r + 1;

  c(z);
}
var i = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
c(i);
console.log(x);
