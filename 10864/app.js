var a = {};
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' '); }).forEach(function(e) {
  if(a[e[0]] === undefined) {
    a[e[0]] = {};
  }
  if(a[e[1]] === undefined) {
    a[e[1]] = {};
  }
  if(e[0] !== e[1]) {
    a[e[0]][e[1]] = true;
    a[e[1]][e[0]] = true;
  }
});
console.log(Object.keys(a).sort(function(a, b) { return parseInt(a) - parseInt(b); }).map(function(e) {
  return Object.keys(a[e]).length;
}).join('\n'));
