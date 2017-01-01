var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return parseInt(e); });
var a = [];
n.forEach(function(e) {
  if(e === 0) {
    a.pop();
  }
  else {
    a.push(e);
  }
});
console.log(a.reduce(function(prev, curr) { return prev + curr; }, 0));
