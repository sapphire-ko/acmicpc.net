var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse();
var t = parseInt(s.pop());
s.pop();
var k = {}
s.forEach(function(e) {
  var x = e.split(' ').map(function(f) { return parseInt(f); });
  k[x[0]] = x[1];
});
var l = Object.keys(k).sort(function(a, b) { return b - a; });
for(var i = 0; i < l.length; ++i) {
  
}
//for(var i = 0; i <= )
console.log(k);
