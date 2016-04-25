var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); }).reverse();
var k = n.pop();
n.reverse().pop();
console.log(n.map(function(e) {
  return e + ' is ' + (e % k === 0 ? '' : 'NOT ') + 'a multiple of ' + k + '.';
}).join('\n'));
