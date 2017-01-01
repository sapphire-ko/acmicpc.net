var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var k = n.splice(0, 1)[0];
var a = n.splice(0, k[2]);
var b = n;
var t = {};
b.forEach(function(e) {
  a.forEach(function(f) {
    if(e[0] === f[0] && e[1] > f[2]) {
      if(t[f[1]] === undefined) {
        t[f[1]] = 1;
      }
      else {
        ++t[f[1]];
      }
    }
  })
});
var x = [];
Object.keys(t).map(function(e) {
  if(t[e] === b.length) {
    x.push(e);
  }
});
console.log(x.map(function(e) {
  var l = {};
  a.forEach(function(f) {
    if(f[1] == e) {
      l[f[0]] = true;
    }
  });
  return Object.keys(l).length;
}).sort(function(a, b) { return (b - a); })[0]);
