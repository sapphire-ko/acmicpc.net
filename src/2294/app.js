var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var k = parseInt(n.shift().split(' ')[1]);
n = n.map(function(e) { return parseInt(e); }).sort().reverse();
function calc() {
  var t = [];
  for(var i = 0; i <= n.length; ++i) {
    t[i] = [];
    for(var j = 0; j <= k; ++j) {
      t[i].push((j === 0 ? 1 : 0));
    }
  }
  for(var i = 1; i <= n.length; ++i) {
    for(var j = 1; j <= k; ++j) {
      t[i][j] = t[i - 1][j] + (n[i - 1] <= j ? t[i][j - n[i - 1]] : 0);
    }
  }
  return t;
}
console.log(calc());
