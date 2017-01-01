var a = {};
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).forEach(function(e) {
  var x = parseInt(e);
  if(a[x] === undefined) {
    a[x] = 1;
  }
  else {
    ++a[x];
  }
});
console.log(Object.keys(a).sort(function(s, t) { return ((a[t] - a[s]) || (s - t)); })[0]);
