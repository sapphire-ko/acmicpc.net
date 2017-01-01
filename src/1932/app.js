var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
for(var i = 1; i < n.length; ++i) {
  for(var j = 0; j < i + 1; ++j) {
    if(j === 0) {
      n[i][j] += n[i - 1][j];
    }
    else if(j === i) {
      n[i][j] += n[i - 1][j - 1];
    }
    else {
      if(n[i - 1][j - 1] > n[i - 1][j]) {
        n[i][j] += n[i - 1][j - 1];
      }
      else {
        n[i][j] += n[i - 1][j];
      }
    }
  }
}
console.log(Math.max.apply(Math, n[n.length - 1]));
