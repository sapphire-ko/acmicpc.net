var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
var x = [];
for(var i = 2; i <= n[0]; ++i) {
  x.push(i);
}
var c = 0;
var a;
function k() {
  while(x.length > 0 && c < n[1]) {
    var p = x.splice(0, 1)[0];
    a = p;
    ++c;
    for(var i = 2; p * i <= x[x.length - 1]; ++i) {
      if(x.indexOf(p * i) !== -1) {
        x.splice(x.indexOf(p * i), 1);
        a = p * i;
        ++c;
        if(c === n[1]) {
          return;
        }
      }
    }
  }
}
k();
console.log(a);
