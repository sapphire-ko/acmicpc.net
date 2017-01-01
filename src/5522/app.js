console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reduce(function(p, c) { return p + parseInt(c); }, 0));
