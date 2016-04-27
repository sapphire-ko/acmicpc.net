console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').reduce(function(prev, curr) { return parseInt(prev, parseInt(curr)); }));
