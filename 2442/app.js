var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var s = '';
for(var i = 0; i < n; ++i) {
  if(i !== 0) {
    s += '\n';
  }
  for(var j = 0; j < (n - i - 1); ++j) {
    s += ' ';
  }
  for(var j = 1; j <= i * 2 + 1; ++j) {
    s += '*';
  }
}
console.log(s);
