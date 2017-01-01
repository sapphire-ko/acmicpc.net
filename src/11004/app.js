console.time(1);
var a = {};
var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input[1].split(' ').forEach(function(e) {
  if(a[e] === undefined) {
    a[e] = 1;
  }
  else {
    ++a[e];
  }
});
var c = 0;
Object.keys(a).forEach(function(e) {
  console.log(a[e]);
});
console.timeEnd(1);
