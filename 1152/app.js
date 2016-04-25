console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').filter(function(e) { return e; }).length);
