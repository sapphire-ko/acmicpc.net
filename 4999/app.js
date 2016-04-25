var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(s[0].length >= s[1].length ? 'go' : 'no');
