var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var a = '';
for(var i = 0; i < n; ++i) {
  var s = (i === 0 ? '' : '\n');
  for(var j = 1; j < (n - i); ++j) {
    s += ' ';
  }
  s += '*';
  if(i === (n - 1)) {
    for(var j = 0; j < (n - 1) * 2; ++j) {
      s += '*';
    }
  }
  else if(i !== 0) {
    for(var j = 0; j < (2 * i - 1); ++j) {
      s += ' ';
    }
    s += '*';
  }
  a += s;
}
console.log(a);
