var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); });
console.log(('0' + ((input[0] % 100 + (input[1] - (input[0] % input[1]))) % input[1])).substr(-2));
