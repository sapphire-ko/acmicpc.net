var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i > 0); }).map(function(e) { return e.split(' ').map(function(e, i) { return (i === 0 ? e : parseInt(e)); }); }).sort(function(a, b) { return ((a[3] - b[3]) || (a[2] - b[2]) || (a[1] - b[1])); });
console.log(s[s.length - 1][0] + '\n' + s[0][0]);
