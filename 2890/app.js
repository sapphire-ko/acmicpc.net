var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { var x = e.split(''); x.pop(); return x.reverse(); });
var a = {};
var n = 1;
for(var i = 0; i < s[0].length; ++i) {
  var f = false;
  for(var j = 0; j < s.length; ++j) {
    var x = s[j][i];
    if(x === '.' || x === 'S') {
      continue;
    }
    if(a[x] === undefined) {
      f = true;
      a[x] = n;
    }
  }
  if(f) {
    ++n;
  }
}
console.log(Object.keys(a).map(function(e) { return parseInt(e); }).sort(function(a, b) { return (a - b); }).map(function(e) { return a[e]; }).join('\n'));
