var a = {};
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).forEach(function(e) {
  if(a[e[0]] === undefined) {
    a[e[0]] = 1;
  }
  else {
    ++a[e[0]];
  }
});
var x = Object.keys(a).map(function(e) { return (a[e] >= 5 ? e : false); }).filter(function(e) { return (e !== false); }).sort().join('');
console.log((x.length === 0 ? 'PREDAJA' : x));
