var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1];
var x = s.split('').map(function(e) { return (e === 'A' ? -1 : 1); }).reduce(function(prev, curr) { return prev + curr; });
console.log((x === 0 ? 'Tie' : (x < 0 ? 'A' : 'B')));
