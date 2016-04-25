var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var a = [];
for(var i = 0; i < n; ++i) {
  a.push(n * i + i);
}
console.log(a.reduce(function(prev, curr) { return prev + curr; }));
