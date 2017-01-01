var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); });
var s = n.reduce(function(p, c) { return (p + c); });
var k = s - 100;
var a, b;
for(var i = 0; i < n.length - 1; ++i) {
  for(var j = i + 1; j < n.length; ++j) {
    if(n[i] + n[j] === k) {
      a = i;
      b = j;
    }
  }
}
console.log(n.filter(function(e, i) { return (i !== a && i !== b); }).join('\n'));
