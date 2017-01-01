var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var k = s.shift().split(' ').map(function(e) { return parseInt(e); });
var x = {};
s.splice(0, k[0]).forEach(function(e, i) {
  x[e] = (i + 1);
  x[i + 1] = e;
});
console.log(s.map(function(e) { return x[e]; }).join('\n'));
