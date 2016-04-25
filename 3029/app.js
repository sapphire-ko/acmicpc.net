var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(':').map(function(e) { return parseInt(e); }); });
if(n[0][0] === n[1][0] && n[0][1] === n[1][1] && n[0][2] === n[1][2]) {
  console.log('24:00:00');
}
else {
  var h, m, s;
  if(n[1][2] < n[0][2]) {
    s = n[1][2] - n[0][2] + 60;
    m = -1;
  }
  else {
    s = n[1][2] - n[0][2];
    m = 0;
  }
  if((n[1][1] + m) < n[0][1]) {
    m = (n[1][1] + m) - n[0][1] + 60;
    h = -1;
  }
  else {
    m = (n[1][1] + m) - n[0][1];
    h = 0;
  }
  h = h + (n[1][0] - n[0][0]) + 24;
  h %= 24;
  console.log(('0' + h).substr(-2) + ':' + ('0' + m).substr(-2) + ':' + ('0' + s).substr(-2));
}
