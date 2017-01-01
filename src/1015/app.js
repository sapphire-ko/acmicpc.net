console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(function(e, i) {
  return [parseInt(e), i];
}).sort(function(a, b) { return (a[1] - b[1]); }).map(function(e) { return (e[0] - 1); }).join(' '));
