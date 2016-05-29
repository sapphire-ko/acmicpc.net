var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s.shift();
var k = s.shift().split(' ').map(function(e) { return parseInt(e); }).reduce(function(prev, curr) { return (prev * curr); });
s = s.pop().split(' ').map(function(e) { return parseInt(e); }).sort(function(a, b) { return (b - a); });
var c = 0;
while(k > 0 && s.length > 0) {
  k -= s.shift();
  ++c;
}
console.log(k > 0 ? 'STRESS' : c);
