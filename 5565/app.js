console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); }).reduce(function(prev, curr) { return prev - curr; }));
