console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) {
  return (i === 0 ? false : e);
}).map(function(e, i) {
  var x = e.split(' ');

  return [parseInt(x[0]), x[1], i];
}).sort(function(a, b) {
  return (a[0] - b[0]) || (a[2] - b[2]);
}).map(function(e) { return e[0] + ' ' + e[1]; }).join('\n'));
