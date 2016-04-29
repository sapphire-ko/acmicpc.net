var a = 0;
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); }).map(function(e) {
  a = a - e[0] + e[1];
  return a;
}).sort(function(a, b) { return (b - a); })[0]);
