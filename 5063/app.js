var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
n.shift();
n = n.map(function(e) { return e.split(' ').map(function(e) { return parseInt(e); }); });
console.log(n.map(function(e) {
  var x = e[0] + e[2];
  if(x === e[1]) {
    return 'does not matter';
  }
  else if(x > e[1]) {
    return 'do not advertise';
  }
  else {
    return 'advertise';
  }
}).join('\n'));
