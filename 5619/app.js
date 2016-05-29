var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return parseInt(e); }).sort(function(a, b) { return (a - b); });
var k = Math.pow(10, Math.ceil(Math.log(n[2]) / Math.log(10)));
var i = 0;
n = n.filter(function(e) { return (e < k); });
var x = [];
for(var i = 0; i < (n.length - 1); ++i) {
  for(var j = (i + 1); j < n.length; ++j) {
    x.push(parseInt('' + n[i] + n[j]));
    x.push(parseInt('' + n[j] + n[i]));
  }
}
console.log(x.sort(function(a, b) { return (a - b); })[2]);
