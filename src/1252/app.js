var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return e.split(''); });
var a, b, c = 0;
var x = '';
while(n[0].length > 0 || n[1].length > 0) {
  a = parseInt(n[0].pop());
  b = parseInt(n[1].pop());
  a = a ? a : 0;
  b = b ? b : 0;
  var k = a + b + c;
  if(k > 1) {
    c = 1;
    k %= 2;
  }
  else {
    c = 0;
  }
  x = k + x;
}
x = (c + x).replace(/^0*/g, ' ').trim();
console.log(x.length === 0 ? 0 : x);
