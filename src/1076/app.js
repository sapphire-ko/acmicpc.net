var c = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e, i) { return (i < 2 ? c.indexOf(e) : Math.pow(10, c.indexOf(e))); }).reduce(function(prev, curr, i) { return (i === 1 ? prev * 10 + curr : prev * curr); }));
