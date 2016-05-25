var x = [-1, 1, 0, 0];
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); }).forEach(function(e) {
  var t = x[e[0]];
  x[e[0]] = x[e[1]];
  x[e[1]] = t;
});
console.log(x.indexOf(1));
