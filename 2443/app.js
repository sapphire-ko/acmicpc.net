var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var a = '';
for(var i = n; i > 0; --i) {
  var s = '';
  for(var j = 0; j < n - i; ++j) {
    s += ' ';
  }
  for(var j = 0; j < i * 2 - 1; ++j) {
    s += '*';
  }
  a += s + '\n';
}
console.log(a.trim());
