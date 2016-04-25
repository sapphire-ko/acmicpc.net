var a = {};
var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) {
  if(a[e] === undefined) {
    a[e] = 1;
  }
  else {
    ++a[e];
  }
  return parseInt(e);
});
var x = n.reduce(function(prev, curr) { return prev + curr; }) / n.length;
var k;
Object.keys(a).forEach(function(e) {
  if(k === undefined) {
    k = e;
    return;
  }
  if(a[k] < a[e]) {
    k = e;
  }
});
console.log(x + '\n' + k);
