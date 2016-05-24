var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var t = parseInt(s.shift());
for(var i = 0; i < t; ++i) {
  var k = parseInt(s.shift());
  var x = 0;
  var y = s.splice(0, k).map(function(e) { return e.split(' ').map(function(e) { return parseFloat(e); }).reduce(function(p, c) { x += p; return (p * c); }); }).reduce(function(p, c) { return (p + c); }, 0);
  console.log(x + ' ' + (y / x).toFixed(1));
}
