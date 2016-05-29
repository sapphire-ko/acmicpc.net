var c = 0;
var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(function(e) { return parseInt(e); });
var x = [];
for(var i = 0; i < s.length; ++i) {
  x.push(0);
}
for(var i = 0; i < s.length; ++i) {
  if(x[s[i] - 1] === 0) {
    ++c;
    if(s[i] - 2 >= 0) {
      x[s[i] - 2] += 1;
    }
  }
  else {
    x[s[i] - 1] -= 1;
    if(s[i] - 2 >= 0) {
      x[s[i] - 2] += 1;
    }
  }
}
console.log(c);
