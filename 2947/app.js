var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var i = 0;
var j = 1;
while(n.join(' ') !== '1 2 3 4 5') {
  if(n[i] > n[j]) {
    var t = n[i];
    n[i] = n[j];
    n[j] = t;
    console.log(n.join(' '));
  }
  i = (i + 1) % 5;
  j = (j + 1) % 5;
  if(i === 4 && j === 0) {
    i = 0;
    j = 1;
  }
}
