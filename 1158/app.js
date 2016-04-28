var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var x = [];
var a = [];
for(var i = 0; i < n[0]; ++i) {
  x.push(i + 1);
}
var t = 0;
while(x.length > 0) {
  t += n[1] - 1;
  t %= x.length;
  a.push(x.splice(t, 1)[0]);
}
console.log('<' + a.join(', ') + '>');
