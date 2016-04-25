console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(function(e, i, a) { return (a[i - 1] === e ? 5 : 10); }).reduce(function(prev, curr) { return prev + curr; }));
