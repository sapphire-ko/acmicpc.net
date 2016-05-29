var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return parseInt(e); }).sort(function(a, b) { return (a - b); });
console.log((n.reduce(function(p, c) { return (p + c); }, 0) / n.length).toFixed(6));
if(n.length % 2 === 1) {
  console.log((n[(n.length - 1) / 2]).toFixed(6));
}
else {
  var a = n[n.length / 2 - 1];
  var b = n[n.length / 2];
  console.log(((a + b) / 2).toFixed(6));
}
