var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var a = {};
input[1].split(' ').forEach(function(e) {
  if(a[e] === undefined) {
    a[e] = 1;
  }
  else {
    ++a[e];
  }
})
console.log(input[3].split(' ').map(function(e) {
  return a[e] ? a[e] : 0;
}).join('\n'));
