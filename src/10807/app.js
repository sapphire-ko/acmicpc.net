var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(s[1].split(' ').filter(function(e) { return (e === s[2]); }).length);
