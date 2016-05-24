var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
if(n[1] <= n[0]) {
  console.log(n[0] - n[1]);
}
else {
  var x = [];
  for(var i = 0; i <= n[1] * 2; ++i) {
    x.push(i === n[0] ? 0 : -1);
  }
  var c = 0;
  while(x[n[1]] === -1) {
    for(var i = 0; i < x.length; ++i) {
      if(x[i] === c) {
        if(x[i - 1] === -1) {
          x[i - 1] = c + 1;
        }
        if(x[i + 1] === -1) {
          x[i + 1] = c + 1;
        }
        if(x[i * 2] === -1) {
          x[i * 2] = c + 1;
        }
      }
    }
    ++c;
  }
  console.log(x[n[1]]);
}
