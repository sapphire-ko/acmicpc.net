var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var a = input[0].split(' ').sort(function(a, b) { return parseInt(a) - parseInt(b); });
console.log(input[1].split('').map(function(e) { return a[e.charCodeAt() - 65]; }).join(' '));
