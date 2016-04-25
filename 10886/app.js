var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(function(e) { return parseInt(e); }).reverse();
var n = input.pop();
console.log('Junhee is ' + (input.reduce(function(prev, curr) { return prev + curr; }) > (n / 2) ? '' : 'not ') + 'cute!');
