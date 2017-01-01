var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var k = parseInt(n.shift().split(' ')[1]);
n = n[0].split(' ').map(function(e) { return parseInt(e); });
var t = {};
var s_n = n.filter(function(e) { return (e < 0); }).reduce(function(prev, curr) { return prev + curr; }, 0);
var s_p = n.filter(function(e) { return (e > 0); }).reduce(function(prev, curr) { return prev + curr; }, 0);

for(var i = -1; i < n.length; ++i) {
  t[i] = {};
  for(var j = s_n; j <= s_p; ++j) {
    t[i][j] = (i === -1 && j === 0 ? 1 : 0);
  }
}
for(var i = 0; i < n.length; ++i) {
  for(var j = s_n; j <= s_p; ++j) {
    if(t[i - 1][j - n[i]] !== undefined) {
      t[i][j] = t[i - 1][j] + t[i - 1][j - n[i]];
    }
    else {
      t[i][j] = t[i - 1][j];
    }
  }
}
console.log(t[n.length - 1][k] + (k === 0 ? -1 : 0));
