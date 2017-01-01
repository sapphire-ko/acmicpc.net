var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var n = parseInt(s.shift());
console.log(s[0].split('').map(function(e, i) {
  if(n % 2 === 0) {
    return (e === s[1][i]);
  }
  else {
    return (e !== s[1][i]);
  }
}).reduce(function(p, c) { return (p && c); }) ? 'Deletion succeeded' : 'Deletion failed');
