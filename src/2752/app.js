console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); }).sort(function(a, b) { return a - b; }).join(' '));
