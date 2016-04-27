console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i !== 0); }).sort(function(a, b) { return b - a; }).join('\n'));
