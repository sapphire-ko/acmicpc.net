var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) { return e.split(' '); });
var g = s.reduce(function(prev, curr) { return prev + parseInt(curr[1]); }, 0);
console.log((Math.round((s.reduce(function(prev, curr) {
  var x;
  switch(curr[2][0]) {
  case 'A':
    x = 4.0;
    break;
  case 'B':
    x = 3.0;
    break;
  case 'C':
    x = 2.0;
    break;
  case 'D':
    x = 1.0;
    break;
  case 'F':
    x = 0.0;
    break;
  }
  switch(curr[2][1]) {
  case '+':
    x += 0.3;
    break;
  case '-':
    x -= 0.3;
    break;
  }
  x = Math.round(x * parseInt(curr[1]) * 10) / 10;
  return prev + x;
}, 0) / g) * 100) / 100).toFixed(2));
