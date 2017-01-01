var m = [];
var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var x = 0, y = 0;
n.forEach(function(e) {
  x = Math.max(x, e[2]);
  y = Math.max(y, e[3]);
});
for(var i = 0; i <= x; ++i) {
  m.push([]);
  for(var j = 0; j <= y; ++j) {
    m[i].push(0);
  }
}
n.forEach(function(e) {
  for(var i = e[0]; i < e[2]; ++i) {
    for(var j = e[1]; j < e[3]; ++j) {
      m[i][j] = 1;
    }
  }
});
console.log(m.map(function(e) { return e.reduce(function(prev, curr) { return prev + curr; }); }).reduce(function(prev, curr) { return prev + curr; }));
