var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s.shift();
console.log(s.map(function(e, i) {
  return 'Case ' + (i + 1) + ': ' + (eval(e.replace('=', '==')) ? 'YES' : 'NO');
}).join('\n'));
