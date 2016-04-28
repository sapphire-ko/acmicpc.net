var s = require('fs').readFileSync('/dev/stdin').toString().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { var x = e.split(''); x.pop(); return x.reverse(); });
s.pop();
s.pop();
var a = {};
var n = 0;
while(s[0].length > 0) {
  var flag = false;
  s.forEach(function(e, i) {
    if(e[e.length - 1] !== '.') {
      if(flag === false) {
        ++n;
        flag = true;
      }
      a[i + 1] = n;
    }
    e.pop();
  });
}
var m = Object.keys(a).map(function(e) { return a[e]; }).sort(function(a, b) { return (b - a); })[0];
console.log(Object.keys(a).map(function(e) { return (m + 1 - a[e]); }).join('\n'));
