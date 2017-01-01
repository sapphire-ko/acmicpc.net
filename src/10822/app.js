console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split(',').reduce(function(prev, curr) { return prev + parseInt(curr); }, 0));
