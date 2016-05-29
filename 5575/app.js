console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) {
  var x = e.split(' ').map(function(e) { return parseInt(e); });
  var a = x[0] * 3600 + x[1] * 60 + x[2];
  var b = x[3] * 3600 + x[4] * 60 + x[5];
  x = b - a;
  var h, m, s;
  h = Math.floor(x / 3600);
  x %= 3600;
  m = Math.floor(x / 60);
  x %= 60;
  s = x;
  return h + ' ' + m + ' ' + s;
}).join('\n'));
