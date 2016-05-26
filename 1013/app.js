var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s.shift();
console.log(s.map(function(e) {
  return (e.match(/^(100+1+|01)+$/)) === null ? 'NO' : 'YES';
}).join('\n'));
