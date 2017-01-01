console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(function(e) { return (e.toUpperCase() === e ? e.toLowerCase() : e.toUpperCase()); }).join(''));
