console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) {
  var x = e.split(' ').map(function(e) { return parseInt(e); });
  var a = (x[2] - 1) % x[0] + 1;
  var b = Math.floor((x[2] - 1) / x[0]) + 1;
  return a * 100 + b;
}).join('\n'));
