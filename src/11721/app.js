console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(function(e, i) { return (i % 10 === 0 ? '\n' : '') + e; }).join('').trim());
