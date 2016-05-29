var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(s.map(function(e) {
  var x = e.split('=');
  var y = x[0].split('+').map(function(e) {
    return parseInt(e.split('').reverse().join(''));
  });
  c = parseInt(x[1].split('').reverse().join(''));
  return (y[0] + y[1] === c ? 'True' : 'False');
}).join('\n'));
