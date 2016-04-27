var m = 0;
var x, y;
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').forEach(function(e, i) { e.split(' ').forEach(function(e, j) {
  if(m < parseInt(e)) {
    m = parseInt(e);
    x = i + 1, y = j + 1;
  }
}); });
console.log(m + '\n' + x + ' ' + y);
