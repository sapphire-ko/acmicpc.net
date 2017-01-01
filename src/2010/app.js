var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).map(function(e) { return parseInt(e); });
console.log(n.reduce(function(prev, curr) { return prev + curr; }) - n.length + 1);
