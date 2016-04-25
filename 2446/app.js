var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());

function p(k) {
  var s = '';
  for(var i = 0; i < n - k; ++i) {
    s += ' ';
  }
  for(var i = 0; i < k * 2 - 1; ++i) {
    s += '*';
  }
  s += '\n';
  return s;
}

var a = '';
for(var i = n; i > 0; --i) {
  a += p(i);
}
for(var i = 2; i <= n; ++i) {
  a += p(i);
}

console.log(a.trim());
