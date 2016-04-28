var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(function(e) { return parseInt(e); });
var a = '';
var c = 0;
while(n.length > 1) {
  var k = n.pop() + c;
  if(k >= 5) {
    ++n[n.length - 1];
    if(n[n.length - 1] === 10) {
      n[n.length - 1] = 0;
      c = 1;
    }
    else {
      c = 0;
    }
  }
  a += '0';
}
console.log('' + (c != 0 ? c : '') + n[0] + a);
