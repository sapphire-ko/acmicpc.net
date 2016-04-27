var k = {};
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 1); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }).sort(function(a, b) { return a - b; }); }).sort(function(a, b) { return (a[0] - b[0] || a[1] - b[1]); }).forEach(function(e) {
  if(k[e[0]] === undefined) {
    k[e[0]] = {};
  }
  if(k[e[1]] === undefined) {
    k[e[1]] = {};
  }
  k[e[0]][e[1]] = true;
  k[e[1]][e[0]] = true;
  Object.keys(k[e[0]]).forEach(function(i) {
    Object.keys(k[e[0]]).forEach(function(j) {
      k[i][j] = true;
      k[j][i] = true;
    });
  });
  Object.keys(k[e[1]]).forEach(function(i) {
    Object.keys(k[e[1]]).forEach(function(j) {
      k[i][j] = true;
      k[j][i] = true;
    });
  });
});
console.log(Object.keys(k[1]).length - 1);
