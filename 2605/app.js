var a = [];
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(function(e) { return parseInt(e); }).forEach(function(e, i) {
  a.splice(e, 0, (i + 1));
});
console.log(a.reverse().join(' '));
