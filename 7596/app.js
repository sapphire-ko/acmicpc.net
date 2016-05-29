var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var i = 1;
while(s[0] !== '0') {
  var n = parseInt(s.shift());
  console.log((i++) + '\n' + s.splice(0, n).map(function(e) {
    return [e, e.toLowerCase()];
  }).sort(function(a, b) { return a[1].localeCompare(b[1]); }).map(function(e) { return e[0]; }).join('\n'));
}
