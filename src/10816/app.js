var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i === 1 || i === 3); }).map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var a = {};
n[0].forEach(function(e) {
  if(a[e] === undefined) {
    a[e] = 1;
  }
  else {
    ++a[e];
  }
});
console.log(n[1].map(function(e) { return a[e] === undefined ? 0 : a[e]; }).join(' '));
