console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e, i) { return (i + 1) + '. ' + e; }).join('\n'));
