var s = [1, 1, 2, 2, 2, 8];
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); }).map(function(e, i) {
  return (s[i] - e);
}).join(' '));
