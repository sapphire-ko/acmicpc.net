var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var a = '';
for(var i = 0; i < n; ++i) {
  var s = '';
  for(var j = 0; j < (n - i - 1); ++j) {
    s += ' ';
  }
  s += '*';
  for(var j = 0; j < i * 2 - 1; ++j) {
    s += ' ';
  }
  if(i !== 0) {
    s += '*';
  }
  a += s;
  if(i < n - 1) {
    a += '\n';
  }
}
console.log(a);
