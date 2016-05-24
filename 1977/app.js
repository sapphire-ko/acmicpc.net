var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); });
var a = Math.ceil(Math.sqrt(n[0]));
var x = [];
for(var i = a; Math.pow(i, 2) <= n[1]; ++i) {
  x.push(Math.pow(i, 2));
}
if(x.length === 0) {
  console.log(-1);
}
else {
  console.log(x.reduce(function(p, c) { return (p + c); }) + '\n' + x[0]);
}
