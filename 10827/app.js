console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').reduce(function(prev, curr) { console.log(prev + ' ' + curr); return Math.pow(prev, curr); }))
