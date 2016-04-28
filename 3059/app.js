var x = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce(function(prev, curr) { return prev + curr.charCodeAt(); }, 0);
var a;
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) {
  a = {};
  var k = e.split('').forEach(function(e) {
    a[e] = true;
  });
  return x - Object.keys(a).reduce(function(prev, curr) { return prev + curr.charCodeAt(); }, 0);
}).join('\n'));
