var a = {};
var c = 0;
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').forEach(function(e) {
  if(a[e] === undefined) {
    a[e] = true;
  }
  else {
    ++c;
  }
});
console.log(c);
