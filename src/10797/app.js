var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(n[1].split(' ').map(function(e) { return parseInt(e); }).map(function(e) { return (e === parseInt(n[0]) ? 1 : 0); }).reduce(function(prev, curr) { return prev + curr; }));
