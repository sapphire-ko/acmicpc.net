var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
var a = '';
while(s.length > 0) {
  var k = s.pop();
  k = (s.length > 0 ? s.pop() : '') + k;
  k = (s.length > 0 ? s.pop() : '') + k;
  a = parseInt(k, 2).toString(8) + a;
}
console.log(a);
