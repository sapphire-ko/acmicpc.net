var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
n.pop();
console.log(n.map(function(e) {
  if((e[1] - e[0]) === (e[2] - e[1])) {
    var x = e[1] - e[0];
    return 'AP ' + (e[2] + x);
  }
  else {
    var x = e[1] / e[0];
    return 'GP ' + (e[2] * x);
  }
}).join('\n'));
