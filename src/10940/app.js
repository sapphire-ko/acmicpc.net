console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(function(e) { return e.charCodeAt().toString(16); }).join('').toUpperCase());
