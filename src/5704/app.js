var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
s.pop();
console.log(s.map(function(e) {
  return (e.split('').filter(function(e) { return (e.charCodeAt() >= 'a'.charCodeAt() && e.charCodeAt() <= 'z'.charCodeAt()); }).filter(function(e, i, a) {
    return (a.indexOf(e) === i);
  }).length === 26 ? 'Y' : 'N');
}).join('\n'));
