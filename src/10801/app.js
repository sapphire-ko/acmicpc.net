var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var x = n[0].map(function(e, i) {
  if(e < n[1][i]) {
    return -1;
  }
  else if(e === n[1][i]) {
    return 0;
  }
  else {
    return 1;
  }
});
console.log(x);
x = x.reduce(function(prev, curr) { return prev + curr; });
console.log((x < 0 ? 'B' : (x === 0 ? 'D' : 'A')));
