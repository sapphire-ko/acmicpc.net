var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); }).filter(function(e) { return (e % 2 === 1); });
if(n.length === 0) {
  console.log(-1);
}
else {
  console.log(n.reduce(function(prev, curr) { return prev + curr; }) + '\n' + Math.min.apply(Math, n));
}
