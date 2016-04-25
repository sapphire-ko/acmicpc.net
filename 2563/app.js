var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var a = [];
var x = 0;
var y = 0;
n.forEach(function(e) {
  if(x < e[0]) {
    x = e[0];
  }
  if(y < e[1]) {
    y = e[1];
  }
});
x += 10;
y += 10;
for(var i = 0; i < x; ++i) {
  a.push([]);
  for(var j = 0; j < y; ++j) {
    a[i].push(0);
  }
}
n.forEach(function(e) {
  for(var i = e[0]; i < e[0] + 10; ++i) {
    for(var j = e[1]; j < e[1] + 10; ++j) {
      a[i][j] = 1;
    }
  }
});
console.log(a.map(function(e) { return e.reduce(function(prev, curr) { return prev + curr; }); }).reduce(function(prev, curr) { return prev + curr; }));
