var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(function(e) { return parseInt(e); });
console.log(Math.min(input[0], input[2] - input[0], input[1], input[3] - input[1]));
