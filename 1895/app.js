var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var k = n.shift();
var t = n.pop()[0];
var s = 0;
for(var i = 1; i < n.length - 1; ++i) {
  for(var j = 1; j < n[0].length - 1; ++j) {
    var c = [];
    c.push(n[i - 1][j - 1]);
    c.push(n[i - 1][j - 0]);
    c.push(n[i - 1][j + 1]);
    c.push(n[i - 0][j - 1]);
    c.push(n[i - 0][j - 0]);
    c.push(n[i - 0][j + 1]);
    c.push(n[i + 1][j - 1]);
    c.push(n[i + 1][j - 0]);
    c.push(n[i + 1][j + 1]);
    if(c.sort(function(a, b) { return (a - b); })[4] >= t) {
      ++s;
    }
  }
}
console.log(s);
