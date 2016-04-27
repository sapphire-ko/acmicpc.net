console.log(require('fs').readFileSync('/dev/stdin').toString().trim().replace(/\n/g, '').split(',').reduce(function(prev, curr) { return prev + parseInt(curr); }, 0));
