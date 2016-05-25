var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var x = s.shift();
s.shift();
var r = new RegExp(x, 'g');
console.log(s.map(function(e) {
  return (e + e.substr(0, x.length - 1)).match(r);
}).filter(function(e) { return (e !== null); }).length);
