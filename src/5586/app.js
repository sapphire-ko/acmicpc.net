var str = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(['JOI', 'IOI'].map(function(e) { return str.split('').map(function(f, i) { if(e === str.substring(i, i + e.length)) { return 1; } return 0; }).reduce(function(prev, curr) { return prev + curr; }, 0); }).join('\n'));
