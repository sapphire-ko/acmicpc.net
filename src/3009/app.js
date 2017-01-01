var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var a = {};
n.forEach(function(e) {
  if(a[e[0]] === undefined) {
    a[e[0]] = 1;
  }
  else {
    ++a[e[0]];
  }
});
var x;
Object.keys(a).forEach(function(e) {
  if(a[e] === 1) {
    x = e;
  }
});
a = {};
n.forEach(function(e) {
  if(a[e[1]] === undefined) {
    a[e[1]] = 1;
  }
  else {
    ++a[e[1]];
  }
});
var y;
Object.keys(a).forEach(function(e) {
  if(a[e] === 1) {
    y = e;
  }
});
console.log(x + ' ' + y);
