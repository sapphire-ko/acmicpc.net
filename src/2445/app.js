var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
function p(k) {
  var s = '';
  for(var i = 0; i <= k; ++i) {
    s += '*';
  }
  for(var i = 0; i < 2 * (n - k - 1); ++i) {
    s += ' ';
  }
  for(var i = 0; i <= k; ++i) {
    s += '*';
  }
  return s;
}
for(var i = 0; i < n; ++i) {
  console.log(p(i));
}
for(var i = n - 2; i >= 0; --i) {
  console.log(p(i));
}
