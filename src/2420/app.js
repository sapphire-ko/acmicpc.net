console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); }).reduce(function(prev, curr) { return Math.abs(prev - curr); }));
