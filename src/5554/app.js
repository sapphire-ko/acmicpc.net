var n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reduce(function(prev, curr) { return (prev + parseInt(curr)); }, 0);
console.log(Math.floor(n / 60) + '\n' + (n % 60));
