var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());

function p(k) {
  var s = '';
  for(var i = 1; i < n - k; ++i) {
    s += ' ';
  }
  for(var i = 0; i < k * 2 + 1; ++i) {
    s += (i % 2 === 0 ? '*' : ' ');
  }
  return s;
}

var a = '';
for(var i = 0; i < n; ++i) {
  a += p(i);
  if(i !== n - 1) {
    a += '\n';
  }
}
console.log(a);
