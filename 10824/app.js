var s = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(parseInt(s[0] + s[1]) + parseInt(s[2] + s[3]));
