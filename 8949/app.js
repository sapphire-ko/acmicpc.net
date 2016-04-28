var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return e.split('').map(function(e) { return parseInt(e); }); });
var c = '';
while(n[0].length > 0 || n[1].length > 0) {
  var a = n[0].pop();
  var b = n[1].pop();
  a = (a === undefined ? 0 : a);
  b = (b === undefined ? 0 : b);
  c = (a + b) + c;
}
console.log(c);
