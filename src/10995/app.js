var n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
var a = '';
for(var i = 0; i < n; ++i) {
  var s = (i === 0 ? '' : '\n') + (i % 2 === 0 ? '' : ' ') + '*';
  for(var j = 0; j < n - 1; ++j) {
    s += ' *';
  }
  a += s;
}
console.log(a);
