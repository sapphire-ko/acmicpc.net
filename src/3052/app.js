var a = {};
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').forEach(function(e) {
  a[parseInt(e) % 42] = true;
});
console.log(Object.keys(a).length);
