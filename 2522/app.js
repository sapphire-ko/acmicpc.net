var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
function p(k) {
  var s = '';
  for(var i = 0; i < (n - k - 1); ++i) {
    s += ' ';
  }
  for(var i = 0; i < k + 1; ++i) {
    s += '*';
  }
  return s;
}
var a = '';
for(var i = 0; i < n; ++i) {
  a += p(i) + '\n';
}
for(var i = n - 2; i >= 0; --i) {
  a += p(i);
  if(i !== 0) {
    a += '\n';
  }
}
console.log(a);
