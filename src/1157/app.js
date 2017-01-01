var a = {};
require('fs').readFileSync('/dev/stdin').toString().trim().split('').forEach(function(e) {
  e = e.toLowerCase();
  if(a[e] === undefined) {
    a[e] = 1;
  }
  else {
    ++a[e];
  }
});
var f = false;
var k;
Object.keys(a).forEach(function(e) {
  if(k === undefined) {
    k = e;
    return;
  }
  if(a[e] === a[k]) {
    f = true;
  }
  else if(a[e] > a[k]) {
    k = e;
    f = false;
  }
});
console.log(f ? '?' : k.toUpperCase());
