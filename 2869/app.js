var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var h = 0;
var c = 0;
while(true) {
  ++c;
  h += n[0];
  if(h >= n[2]) {
    break;
  }
  else {
    h -= n[1];
  }
}
console.log(c);
