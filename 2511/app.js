var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
var x = 'D';
var a = [0, 0];
while(n[0].length > 0) {
  var r = n[0].pop();
  var s = n[1].pop();
  if(r > s) {
    if(x === 'D') {
      x = 'A';
    }
    a[0] += 3;
  }
  else if(s > r) {
    if(x === 'D') {
      x = 'B';
    }
    a[1] += 3;
  }
  else {
    a[0] += 1;
    a[1] += 1;
  }
}
if(a[0] > a[1]) {
  x = 'A';
}
else if(a[1] > a[0]) {
  x = 'B';
}
console.log(a[0] + ' ' + a[1] + '\n' + x);
